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
  float: bottom;
  height: 50px;
  background-color: white;
`;
