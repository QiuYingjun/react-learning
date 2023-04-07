import { Card, H5, Spinner } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Album({ album }) {
  const [preview, setPreview] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + album.id
      );
      const pres = await res.json();
      const ran = Math.floor(Math.random() * pres.length);
      const pre = pres.length > 0 ? pres[ran] : null;
      pre.width = 150 * (1 + Math.random() - 0.5);
      pre.height = 150 * (1 + Math.random() - 0.5);
      setPreview(pre);

      const res2 = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + album.userId
      );
      const user = await res2.json();
      setUser(user);
    }
    getData();
  }, [album]);

  return (
    <>
      <WrapperCard interactive={true}>
        <H5>{album.title}</H5>
        <Link href={"/albums/" + album.id}>
          <div className="spinner">
            {preview.thumbnailUrl ? (
              <Image
                src={preview.thumbnailUrl + ".png"}
                alt={preview.title}
                width={preview.width}
                height={preview.height}
                layout="fixed"
              />
            ) : (
              <Spinner size={50} />
            )}
          </div>
        </Link>
        <Link href={"/users/" + user.id}>
          <a>@{user.name}</a>
        </Link>
      </WrapperCard>
    </>
  );
}
const WrapperCard = styled(Card)`
  width: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  float: left;
  display: block;
  break-inside: avoid;

  img {
    margin: 10px;
  }
  div.spinner {
    display: flex;
    justify-content: center;
  }
`;
