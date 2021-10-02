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
