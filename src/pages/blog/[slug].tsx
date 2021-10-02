import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post: {
    meta: { title, cover_image, date },
    content,
  },
}) => {
  return (
    <>
      <Link href="/blog">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        {cover_image && <Image src={cover_image} alt="" />}
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blog"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(data: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join("blog", data.params.slug + ".md"),
    "utf-8"
  );

  console.log(markdownWithMeta);

  const { data: meta, content } = matter(markdownWithMeta);

  return {
    props: {
      post: { meta, slug: data.params.slug, content },
    },
  };
}
