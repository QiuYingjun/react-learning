import Head from "next/head";
import {
  Button,
  Card,
  H5,
} from "@blueprintjs/core";
import styles from "../styles/Home.module.css";
const Home = ({ users }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.cardBox}>
        {users.map((user) => (
          <Card key={user.id} className={styles.card} interactive={true}>
            <H5> {user.name} </H5>
            <p>
              <b>Email: </b>
              <a href={"mailto:" + user.email}>{user.email}</a>
            </p>
            <p>
              <b>Phone: </b>
              {user.phone}
            </p>
            <p>
              <b>Website: </b>
              {user.website}
            </p>
            <p>
              <b>Company: </b>
              {user.company.name}
            </p>
            <Button rightIcon="arrow-right" intent="success" text="Detail" />
          </Card>
        ))}
      </div>
    </>
  );
};
export default Home;
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
};
