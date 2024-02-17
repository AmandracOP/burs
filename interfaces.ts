// interfaces.ts

export interface SanityDocument {
  _id: string;
  _type: string;
  title: string;
  description: string;
}

export interface Category extends SanityDocument {
  title: string;
  description: string;
}

export interface Event extends SanityDocument {
  name: string;
  title: string;
  slug: {
    current: string;
  };
  gallery: Array<{
    image: {
      asset: {
        _ref: string;
      };
    };
    quote?: string;
    alternateText: string;
  }>;
  description: string;
}

export interface GalleryImage {
  image: {
    asset: {
      _ref: string;
    };
  };
  quote?: string;
  alternateText: string;
}

export interface Gallery extends SanityDocument {
  title: string;
  images: Array<GalleryImage>;
}

export interface TeamMember extends SanityDocument {
  name: string;
  designation: string;
  category: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  socials: Array<{
    platform: string;
    link: string;
  }>;
}