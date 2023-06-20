import React from "react";
import { SmallCardContainer } from "./style";
import { IUser } from "../../model/interfaces/user";

interface Props {
  user: IUser;
}
const SmallCard = (props: Props) => {
  return (
    <SmallCardContainer>
      <h3>{props.user.name}</h3>
      <h4>{props.user.company.name}</h4>
      <h5>{props.user.email}</h5>
    </SmallCardContainer>
  );
};

export default SmallCard;
