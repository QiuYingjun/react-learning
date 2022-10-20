import Head from "next/head";
import { H1 } from "@blueprintjs/core";
import styles from "../styles/Home.module.css";
export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <H1>Home</H1>
    </>
  );
}
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   return {
//     props: { users },
//   };
// };
