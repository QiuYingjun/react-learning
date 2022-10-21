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
export default function Topbar() {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Link href="/">
            <a>
              <Image src="/vercel.svg" alt="vercel" height={50} width={100} />
            </a>
          </Link>
        </NavbarHeading>
        <NavbarDivider />
        <Link href="/users">
          <Button className={Classes.MINIMAL} icon="user" text="Users" />
        </Link>
        <Link href="/posts">
          <Button className={Classes.MINIMAL} icon="label" text="Posts" />
        </Link>
        <Link href="/albums">
          <Button className={Classes.MINIMAL} icon="media" text="Albums" />
        </Link>
        <Link href="/about">
          <Button className={Classes.MINIMAL} icon="info-sign" text="About" />
        </Link>
      </NavbarGroup>
    </Navbar>
  );
}
