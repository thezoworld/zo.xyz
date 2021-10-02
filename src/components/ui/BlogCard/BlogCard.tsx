import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="card">
      {post.meta.cover_image && <Image src={post.meta.cover_image} alt="" />}

      <div className="post-date">Posted on {post.meta.date}</div>

      <h3>{post.meta.title}</h3>

      <p>{post.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
};

export default BlogCard;
