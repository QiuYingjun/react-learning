import styled from "styled-components";
import { Divider } from "@blueprintjs/core";
export default function Footer() {
  return (
    <>
      <MyFooter>
        <Divider />
        <div>Copyright 2022</div>
      </MyFooter>
    </>
  );
}
const MyFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: white;
`;
