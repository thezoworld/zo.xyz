import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import React from "react";
import { sortByDate } from "../../../utils";
import { BlogCard } from "../../ui";

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <section className="mt-16 max-w-4xl mx-auto flex-grow">
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("blog"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("blog", filename),
      "utf-8"
    );
    const { data: meta } = matter(markdownWithMeta);

    return {
      slug,
      meta,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
