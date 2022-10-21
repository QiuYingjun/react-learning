import { Card } from "@blueprintjs/core";
import styled from "styled-components";
import Image from "next/image";
export default function Photo({ photo, parentClick, selected }) {
  let Wraper = CardWrapper;
  if (selected) {
    Wraper = CardSelectedWrapper;
  }
  return (
    <Wraper interactive="true" onClick={parentClick}>
      <Image
        src={photo.thumbnailUrl + ".png"}
        alt={photo.id}
        width={150}
        height={150}
        layout="fixed"
      />
    </Wraper>
  );
}
const CardWrapper = styled(Card)`
  margin: 0 5px;
  padding: 10px;
  border: solid white 3px;
`;
const CardSelectedWrapper = styled(Card)`
  margin: 0 5px;
  padding: 10px;
  border: solid red 3px;
`;
