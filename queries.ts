// events.query.ts

import { SanityClient } from '@sanity/client';
import { Event } from '../interfaces';

const client = new SanityClient({
  projectId: 't58icfcc',
  dataset: 'cms',
  useCdn: true,
});

export async function fetchEvents(): Promise<Event[]> {
  const query = `*[_type == "event"]`;
  const result = await client.fetch<Event[]>(query);
  return result;
}