import Head from "next/head";
import styles from "./styles/users.module.css";
import UserCard from "./components/UserCard";
export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div className={styles.cardBox}>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
};
