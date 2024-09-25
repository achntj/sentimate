import Link from "next/link";

import { getAllAuthors, getAllPosts } from "../../lib/api";

export default function Authors({ authors }) {
  return (
    <div className="authors">
      <h1>Content Writing Department</h1>

      <ul class="author-link">
        {authors.map((author) => (
          <div class="member" key={author.slug}>
            <img src={author.profilePictureUrl} alt={author.name} />
            <li>
              <h2>
                <Link href={author.permalink}>
                  <a>
                    {author.name} | {author.position}
                  </a>
                </Link>
              </h2>
            </li>
            <p>{author.content}</p>
            <Link href={author.permalink}>
              <p>
                For more information, click <a>here.</a>
              </p>
            </Link>
          </div>
          //  <p>{author.posts.length} post(s)</p>
        ))}
      </ul>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      authors: getAllAuthors().map((author) => ({
        ...author,
        posts: getAllPosts().filter((post) => post.author === author.slug),
      })),
    },
  };
}
