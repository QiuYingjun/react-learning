import { Card } from "@blueprintjs/core";
import styled from "styled-components";
import Image from "next/image";
export default function Photo({ photo, parentClick, selected }) {
  let Wraper = PhotoWrapper;
  if (selected) {
    Wraper = SelectedPhotoWrapper;
  }
  return (
    <Wraper interactive="true" onClick={parentClick}>
      <Image
        src={photo.thumbnailUrl + ".png"}
        alt={photo.id}
        width={50}
        height={50}
        layout="fixed"
      />
    </Wraper>
  );
}
const PhotoWrapper = styled(Card)`
  margin: 0 5px;
  padding: 4px 4px 0px 4px;
  border: solid white 1px;
`;
const SelectedPhotoWrapper = styled(Card)`
  margin: 0 5px;
  padding: 4px 4px 0px 4px;
  border: solid red 1px;
`;
