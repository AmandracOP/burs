// queries.ts

import { groq } from 'next-sanity';

// query for fetching a single document
export const fetchFirstDocument = groq`
  *[0]
`;

// query for fetching events
export const fetchEvents = groq`
  *[_type == "event"] {
    
    name,
    title,
    "slug":slug.current,
    gallery,
    "imageUrl": gallery[0].asset->url,
    description
  }
`;

// query for fetching team members
export const fetchTeamMembers = groq`
  *[_type == "team"] {
    
    name,
    designation,
    category,
    image,
    socials[]->
  }
`;

// query for fetching categories
export const fetchCategories = groq`
  *[_type == "category"] {
    
    title,
    description
  }
`;

//query for finding documents with a specific term in their content
export const findDocumentsByTerm = (term: string) => groq`
  *[_type == "event" || _type == "team" || _type == "category"][score(content, ${term}) > 0] {
    
    _type,
    title,
    score
  }
`;
// query for fetching paginated events
export const fetchPaginatedEvents = (page: number, pageSize: number, term?: string) => {
  let query = groq`
    {
      "total": count(*[_type == "event"]),
      "events": *[_type == "event"][${(page - 1) * pageSize}...${page * pageSize - 1}] | order(publishedAt desc) {
        name,
        title,
        slug,
        gallery,
        description
      }
    }
  `;

  if (term) {
    query += `, "searchResults": *[_type == "event" || _type == "team" || _type == "category"][score(content, ${term}) > 0] {
      _type,
      title,
      score
    } | order(_score desc)`;
  }

  return query;
};