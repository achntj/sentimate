import Image from "next/image";
import Link from "next/link";

import { getAllPosts, getAuthorBySlug } from "../../lib/api";

export default function Posts({ posts }) {
  // date sorting
  posts.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className="posts">
      <h1>Posts</h1>

      {posts.map((post) => {
        return (
          <Link href={post.permalink} key={post.slug}>
            <a>
              <p className="post-list">
                <b>{post.title}</b>
                <br />
                {post.oneline}
              </p>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    },
  };
}
