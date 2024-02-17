// queries.ts

import { groq } from 'next-sanity';

// query for fetching a single document
export const fetchFirstDocument = groq`
  *[0]
`;

// query for fetching events
export const fetchEvents = groq`
  *[_type == "event"] {
    _id,
    name,
    title,
    slug,
    gallery,
    description
  }
`;

// query for fetching team members
export const fetchTeamMembers = groq`
  *[_type == "team"] {
    _id,
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
    _id,
    title,
    description
  }
`;

//query for finding documents with a specific term in their content
export const findDocumentsByTerm = (term: string) => groq`
  *[_type == "event" || _type == "team" || _type == "category"][score(content, ${term}) > 0] {
    _id,
    _type,
    title,
    score
  }
`;
// query for fetching paginated events
export const fetchPaginatedEvents = (page: number, pageSize: number, term?: string) => {
  const skipCount = (page - 1) * pageSize;

  const query = groq`
    {
      "total": count(*[_type == "event"]),
      "events": *[_type == "event"][${skipCount}...${pageSize + skipCount - 1}] | order(publishedAt desc) {
        _id,
        name,
        title,
        slug,
        gallery,
        description
      }
    }
  `;

  if (term) {
    query += `,
    "searchResults": *[_type == "event" || _type == "team" || _type == "category"][score(content, ${term}) > 0] {
      _id,
      _type,
      title,
      score
    }`;
  }

  return query;
};