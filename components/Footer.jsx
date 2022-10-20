import styles from "../styles/Home.module.css";
import { Divider } from "@blueprintjs/core";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Divider />
        <div>Copyright 2022</div>
      </footer>
    </>
  );
}
