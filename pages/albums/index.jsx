import Album from "../../components/Album";
import styled from "styled-components";
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
  return (
    <>
      <WrapperAlbums>
        {albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </WrapperAlbums>
    </>
  );
}
const WrapperAlbums = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  float: top;
`;
