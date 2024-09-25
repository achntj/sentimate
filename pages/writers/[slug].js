import Link from "next/link";

import { getAllAuthors, getAllPosts, getAuthorBySlug } from "../../lib/api";

export default function Author({ author }) {
  return (
    <>
      <div className="member">
        <img alt={author.name} src={author.profilePictureUrl} />
        <h2>
          {author.name} | {author.position}
        </h2>
        <p>{author.content}</p>
      </div>

      <h2>Posts</h2>

      <ul>
        {author.posts.map((post) => (
          <p>
            <li key={post.slug}>
              <b>
                <Link href={post.permalink}>
                  <a>{post.title}</a>
                </Link>
              </b>
            </li>
          </p>
        ))}
      </ul>
    </>
  );
}

export function getStaticProps({ params }) {
  const author = getAuthorBySlug(params.slug);

  return {
    props: {
      author: {
        ...author,
        posts: getAllPosts().filter((post) => post.author === author.slug),
      },
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllAuthors().map((author) => ({
      params: {
        slug: author.slug,
      },
    })),
  };
}
