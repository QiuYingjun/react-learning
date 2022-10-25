import { Button, Card, H5, Divider, Icon } from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";
export default function UserCard({ user }) {
  return (
    <MyCard key={user.id} interactive={true}>
      <H5> {user.name} </H5>
      <Divider />
      <ItemWrapper>
        <Icon icon="envelope" className="userCardIcon" />
        <a href={"mailto:" + user.email}>{user.email}</a>
      </ItemWrapper>
      <ItemWrapper>
        <Icon icon="mobile-phone" className="userCardIcon" />
        {user.phone}
      </ItemWrapper>
      <ItemWrapper>
        <Icon icon="globe-network" className="userCardIcon" />
        <a href={"http://" + user.website}>{user.website}</a>
      </ItemWrapper>
      <ItemWrapper>
        <Icon icon="office" className="userCardIcon" />
        {user.company.name}
      </ItemWrapper>
      <Divider />
      <Link href={"/users/" + user.id}>
        <Button rightIcon="arrow-right" intent="success" text="Detail" />
      </Link>
    </MyCard>
  );
}
const MyCard = styled(Card)`
  padding: 15px;
  margin: 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    margin: 20px 10px 0px 10px;
  }
  .userCardIcon {
    margin: 5px;
  }
`;
const ItemWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
