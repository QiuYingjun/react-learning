import { useState, useEffect } from "react";
import Photo from "./components/Photo";
import styled from "styled-components";
import Image from "next/image";
import { Card, H5, Spinner } from "@blueprintjs/core";
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
  const res2 = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + album.userId
  );
  const user = await res2.json();
  return {
    props: { album, user },
  };
};

export default function AlbumDetails({ album, user }) {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [bigImage, setBigImage] = useState(<Spinner />);
  useEffect(() => {
    async function getPhotos() {
      setBigImage(<Spinner />);
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
  }, [album]);
  useEffect(() => {
    if (selectedPhoto.url) {
      setBigImage(
        <Image
          src={selectedPhoto.url + ".png"}
          alt={selectedPhoto.title}
          width={600}
          height={600}
        />
      );
    }
  }, [selectedPhoto]);

  return (
    <>
      <Card>
        <H5>{user.name}</H5>
        <p>{user.email}</p>
      </Card>
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
      <BigImageWrapper>{bigImage}</BigImageWrapper>
    </>
  );
}
const BigImageWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;
const PhotoWrapper = styled.div`
  width: 100%;
  float: top;
  display: flex;
  overflow-x: scroll;
  margin-top: 10px;
  padding: 10px 0 20px 0;
  background-color: white;
`;
