// index.ts

import team from './team';
import events from './events';
import gallery from './gallery';
import { SanityDocument, Category, Event, GalleryImage, TeamMember, Gallery } from './interfaces';

export const schemaTypes = [team, events, gallery] as Sanity.SchemaType[];

export type { Category, Event, GalleryImage, TeamMember, Gallery } from './interfaces';