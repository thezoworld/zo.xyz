type StringObject = { [key: string]: string };

type HeadObject = {
  title: string;
  meta: StringObject;
};

type BlogPost = {
  meta: {
    title: string;
    date: string;
    author: string;
    cover_image: string;
  };
  slug: string;
  content: string;
  excerpt: string;
};

type Background = {
  file: string;
  file_horizontal: string;
  file_vertical: string;
  key: string;
  name: string;
};

type AvatarBase = {
  file: string;
  id: number;
  name: string;
};

type AvatarCategory = {
  assets: AvatarCategoryAsset[];
  display_order: number;
  file: string;
  id: number;
  name: string;
  order: number;
};

type AvatarCategoryAsset = {
  bases: number[];
  cropped_file: string;
  description: string;
  destinations: string[];
  file: string;
  id: number;
  is_free: boolean;
  name: string;
  rarity: number;
};
