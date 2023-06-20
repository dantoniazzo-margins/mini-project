import React from "react";
import { action } from "@/app/config/redux/store";
import { UsersListContainer, UsersList } from "./style";
import { useAppSelector } from "@/app/config/redux/hooks";
import SmallCard from "@/entities/user/ui/small-card";

const index = () => {
  const users = useAppSelector((state) => state.allUsersSlice.allUsers);
  return (
    <UsersListContainer>
      <button onClick={() => action("FETCH_USERS")}>Fetch users</button>
      {users && (
        <UsersList>
          {users.map((user) => (
            <SmallCard user={user} />
          ))}
        </UsersList>
      )}
    </UsersListContainer>
  );
};

export default index;
