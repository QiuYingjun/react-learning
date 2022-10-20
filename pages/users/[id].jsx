import { useState, useEffect } from "react";

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

export default function Details({ user }) {
  const fetchPosts = async () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/users/" + user.id + "/posts"
    );
  };
  const fetchAlbums = async () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/users/" + user.id + "/albums"
    );
  };
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function getData() {
      const res1 = await fetchPosts();
      const posts = await res1.json();
      console.log(posts);
      setPosts(posts);
      const res2 = await fetchAlbums();
      const albums = await res2.json();
      setAlbums(albums);
    }
    getData();
  }, []);
  return (
    <>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
      <ol>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ol>
      <ol>
        {albums.map((album) => (
          <li>{album.title}</li>
        ))}
      </ol>
    </>
  );
}
