import { Inter } from "next/font/google";
import gql from "graphql-tag";
import type { GetServerSideProps, NextPage } from "next";
import { urqlClient } from "../libs/gql-requests";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  posts: {
    id: string;
    title: string;
  }[];
};

export default function Home(props: Props) {
  return (
    <>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const client = await urqlClient();
    const postsQuery = gql`
      query {
        prismaPosts {
          id
          title
        }
      }
    `;
    const result = await client.query(postsQuery, {}).toPromise();

    return {
      props: {
        posts: result.data.prismaPosts,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};
