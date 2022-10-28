import Album from "../../components/Album";
import styled from "styled-components";
import { useEffect, useState } from "react";
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();
  return {
    props: { albums: shuffle(albums) },
  };
};

export default function AlbumHome({ albums }) {
  const [columns, setColumns] = useState(8);
  useEffect(() => {
    function handleResize() {
      for (var i = 1; i < 10; i++) {
        if (window.innerWidth < i * 220) {
          setColumns(i - 1);
          console.log(i - 1);
          break;
        }
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <WrapperAlbums style={{ columns }}>
        {albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </WrapperAlbums>
    </>
  );
}
const WrapperAlbums = styled.div`
  columns: 8;
  column-gap: 10px; // 列间距
`;
