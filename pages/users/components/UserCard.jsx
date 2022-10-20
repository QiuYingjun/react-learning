import { Button, Card, H5, Divider, Icon } from "@blueprintjs/core";
import Link from "next/link";
import styles from "../styles/UserCard.module.css";

export default function UserCard({ user }) {
  return (
    <Card key={user.id} className={styles.card} interactive={true}>
      <H5> {user.name} </H5>
      <Divider />
      <span className={styles.item}>
        <Icon icon="envelope" className={styles.icon} />
        <a href={"mailto:" + user.email}>{user.email}</a>
      </span>
      <span className={styles.item}>
        <Icon icon="mobile-phone" className={styles.icon} />
        {user.phone}
      </span>
      <span className={styles.item}>
        <Icon icon="globe-network" className={styles.icon} />
        <a href={"http://" + user.website}>{user.website}</a>
      </span>
      <span className={styles.item}>
        <Icon icon="office" className={styles.icon} />
        {user.company.name}
      </span>
      <Divider />
      <Link href={"/users/" + user.id}>
        <Button rightIcon="arrow-right" intent="success" text="Detail" />
      </Link>
    </Card>
  );
}
