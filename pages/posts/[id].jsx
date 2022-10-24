import { Card, H5 } from "@blueprintjs/core";
import { useEffect, useState } from "react";
import Link from "next/link";
import Comment from "./components/Comment";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  var posts = await res.json();
  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const post = await res.json();
  return {
    props: { post },
  };
};
export default function PostDetails({ post }) {
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res1 = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + post.userId
      );
      const user_ = await res1.json();
      setUser(user_);
      const res2 = await fetch(
        "https://jsonplaceholder.typicode.com/comments/?postId=" + post.id
      );
      const comments_ = await res2.json();
      setComments(comments_);
    }
    fetchData();
  }, [post.userId, post.id]);
  return (
    <>
      <Card interactive={false}>
        <Link href={"/users/" + user.id}>
          <a>
            <b>@{user.name}</b>
          </a>
        </Link>
        <H5>{post.title}</H5>
        <p>{post.body}</p>
      </Card>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}
