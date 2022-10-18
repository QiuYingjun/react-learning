import Footer from "./Footer";
import Image from "next/Image";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>
              <Image src="/vercel.svg" alt="vercel" height={50} width={100} />
            </NavbarHeading>
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="user" text="Users" />
            <Button className={Classes.MINIMAL} icon="media" text="Photos" />
            <Link href="/about">
              <Button
                className={Classes.MINIMAL}
                icon="info-sign"
                text="About"
              />
            </Link>
          </NavbarGroup>
        </Navbar>
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
