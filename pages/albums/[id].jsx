import { useState, useEffect } from "react";
import Photo from "./components/Photo";
import styled from "styled-components";
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  var albums = await res.json();
  const paths = albums.map((album) => {
    return {
      params: { id: album.id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/" + id);
  const album = await res.json();
  return {
    props: { album },
  };
};

export default function AlbumDetails({ album }) {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  useEffect(() => {
    async function getPhotos() {
      if (album) {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?albumId=" + album.id
        );
        const photos = await res.json();
        setPhotos(photos);
        setSelectedPhoto(photos[0]);
      }
    }
    getPhotos();
  }, []);

  return (
    <>
      <ImageWrapper>
        <img src={selectedPhoto.url} />
      </ImageWrapper>
      <PhotoWrapper>
        {photos.map((photo) => (
          <Photo
            photo={photo}
            key={photo.id}
            parentClick={() => {
              setSelectedPhoto(photo);
            }}
            selected={photo.id == selectedPhoto.id}
          />
        ))}
      </PhotoWrapper>
    </>
  );
}
const ImageWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;
const PhotoWrapper = styled.div`
  width: 100%;
  float: bottom;
  display: flex;
  overflow-x: scroll;
  position: absolute;
  bottom: 50px;
  padding: 10px 0;
  background-color: white;
`;
