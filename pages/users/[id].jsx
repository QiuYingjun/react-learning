import { useState, useEffect } from "react";
import Post from "./components/Post";
import Album from "./components/Album";
import styled from "styled-components";
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  var users = await res.json();
  const paths = users.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();
  return {
    props: { user },
  };
};

export default function UserDetails({ user }) {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function getData() {
      const res1 = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + user.id + "/posts"
      );
      const posts = await res1.json();
      setPosts(posts);
      const res2 = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + user.id + "/albums"
      );
      const albums = await res2.json();
      setAlbums(albums);
    }
    getData();
  }, [setAlbums, setPosts, user.id]);
  if (user) {
    return (
      <>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.website}</p>
        <WrapperContent>
          <WrapperAlbums>
            {albums.map((album) => (
              <Album key={album.id} album={album} />
            ))}
          </WrapperAlbums>
          <WrapperPosts>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </WrapperPosts>
        </WrapperContent>
      </>
    );
  } else {
    return <></>;
  }
}
const WrapperContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const WrapperAlbums = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  position: absolute;
  left: 0;
  width: 70%;
`;
const WrapperPosts = styled.div`
  padding: 10px;
  height: 600px;
  overflow-y: scroll;
  position: absolute;
  right: 0%;
  width: 30%;
  min-width: 200px;
`;
