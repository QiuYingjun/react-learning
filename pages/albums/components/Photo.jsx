import { Button, Card, H5 } from "@blueprintjs/core";
import { useState } from "react";
import styled from "styled-components";
export default function Photo({ photo, parentClick, selected }) {
  if (selected) {
    return (
      <CardSelectedWrapper interactive={true} onClick={parentClick}>
        <img src={photo.thumbnailUrl} />
      </CardSelectedWrapper>
    );
  } else {
    return (
      <CardWrapper interactive={true} onClick={parentClick}>
        <img src={photo.thumbnailUrl} />
      </CardWrapper>
    );
  }
}
const CardWrapper = styled(Card)`
  margin: 0 5px;
  border: solid white 3px;
`;
const CardSelectedWrapper = styled(Card)`
  margin: 0 5px;
  border: solid red 3px;
`;
