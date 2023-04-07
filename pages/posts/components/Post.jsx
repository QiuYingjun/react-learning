import { Card, H4, H5, Spinner } from "@blueprintjs/core";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Link from "next/link";
export default function Post({ post }) {
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [isShowComments, setShowComments] = useState(false);
  const [commentDiv, setCommentDiv] = useState(<></>);
  useEffect(() => {
    async function fetchData() {
      if (post) {
        const res1 = await fetch(
          "https://jsonplaceholder.typicode.com/users/" + post.userId
        );
        const user_ = await res1.json();
        setUser(user_);
      }
    }
    fetchData();
  }, [post]);

  useEffect(() => {
    async function getComments() {
      const res2 = await fetch(
        "https://jsonplaceholder.typicode.com/comments/?postId=" + post.id
      );
      const comments_ = await res2.json();
      setComments(comments_);
      setCommentDiv(
        comments_.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      );
    }
    if (isShowComments) {
      if (comments.length == 0) {
        getComments();
        setCommentDiv(
          <Card>
            <Spinner />
          </Card>
        );
      } else {
        setCommentDiv(
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        );
      }
    } else {
      setCommentDiv(<></>);
    }
  }, [comments, post.id, isShowComments]);

  function handleSetShowComments() {
    setShowComments((a) => !a);
  }
  return (
    <>
      <Card interactive={true} onClick={handleSetShowComments}>
        <H5>
          <Link href={"/users/" + user.id}>
            <a>@{user.name}</a>
          </Link>
        </H5>
        <H4>{post.title}</H4>
        <p>{post.body}</p>
      </Card>
      {commentDiv}
    </>
  );
}
