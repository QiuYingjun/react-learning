import { Card, H6 } from "@blueprintjs/core";
import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
export default function Comment({ comment }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users?email=" + comment.email
      );
      const user_ = await res.json();
      setUser(user_[0]);
    }
    fetchUser();
  }, [comment.email]);
  function getUserLine() {
    if (user && user.id) {
      return (
        <Link href={"/users/" + user.id}>
          <a>@{user.name}</a>
        </Link>
      );
    } else {
      return <b>anonymous {comment.email}</b>;
    }
  }

  return (
    <WrapperCard interactive={false}>
      <H6>{comment.name}</H6>
      <p>{comment.body}</p>
      {getUserLine()}
    </WrapperCard>
  );
}
const WrapperCard = styled(Card)`
  margin-left: 50px;
`;