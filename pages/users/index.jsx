import Head from "next/head";
import UserCard from "./components/UserCard";
import styled from "styled-components";
export default function UserHome({ users }) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <UsersWrapper>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersWrapper>
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

const UsersWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
