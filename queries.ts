
import {  } from 'next-sanity';

export const FirstDocumentquery = `
  *[0]
`;

export const Eventsquery = `
  *[_type == "event"] {
    name,
    title,
    "slug":slug.current,
    gallery,
    "imageUrl": gallery[0].asset->url,
    description
  }
`;
export const Eventquery = `
  *[_type == "event" && slug.current == $slug] {
    name,
    title,
    "slug": slug.current,
    gallery,
    "imageUrl": gallery[0].asset->url,
    description
  }[0]
`;


export const TeamMembersquery = `
  *[_type == "team"] {
    
    name,
    designation,
    category,
    image,
    "imageUrl": gallery[0].asset->url,
    socials[]->
  }
`;

export const findDocumentsByTerm = (term: string) => `
  *[_type == "event" || _type == "team" || _type == "category"][score(content, ${term}) > 0] {
    
    _type,
    title,
    score
  }
`;
export const fetchPaginatedEvents = (page: number, pageSize: number, term?: string) => {
  let query = `
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