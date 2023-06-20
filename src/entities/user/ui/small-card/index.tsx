import React from "react";
import { SmallCard } from "./style";
import { IUser } from "../../model/interfaces/user";

interface Props {
  user: IUser;
}
const index = (props: Props) => {
  return (
    <SmallCard>
      <h3>{props.user.name}</h3>
      <h4>{props.user.company.name}</h4>
      <h5>{props.user.email}</h5>
    </SmallCard>
  );
};

export default index;
