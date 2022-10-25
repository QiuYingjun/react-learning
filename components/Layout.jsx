import styled from "styled-components";
import Footer from "./Footer";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <ContentDiv>{children}</ContentDiv>
      <Footer />
    </>
  );
}
const ContentDiv = styled.div`
  margin: 10px;
`;
