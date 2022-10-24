import styled from "styled-components";
import Footer from "./Footer";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
