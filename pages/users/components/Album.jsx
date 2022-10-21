import { Card, H5, Spinner } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState } from "react";
export default function Album({ album }) {
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    function fetchPreview() {
      return fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + album.id
      );
    }
    async function getData() {
      const res = await fetchPreview();
      const pres = await res.json();
      const ran = Math.floor(Math.random() * pres.length);
      const pre = pres.length > 0 ? pres[ran] : null;
      setPreview(pre);
    }
    getData();
  }, []);

  return (
    <Link href={"/albums/" + album.id}>
      <WrapperCard interactive={true}>
        {preview ? (
          <img src={preview.thumbnailUrl} alt="vercel" />
        ) : (
          <Spinner size={50} />
        )}
        <H5 className="h5">{album.title}</H5>
      </WrapperCard>
    </Link>
  );
}
const WrapperCard = styled(Card)`
  width: 200px;
  /* height: 300px; */
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    margin: 10px;
  }
`;
