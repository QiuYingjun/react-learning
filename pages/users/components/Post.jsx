import { Card, H5 } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";
export default function Post({ post }) {
  return (
    <Wrapper>
      <Link href={"/posts/" + post.id}>
        <Card interactive={true}>
          <H5>{post.title}</H5>
          <span>{post.body}</span>
        </Card>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 300px; */
`;
