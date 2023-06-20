import UsersList from "@/features/usersList/ui";
import { DashboardContainer, LeftSidebar, RightSidebar } from "./style";

const index = () => {
  return (
    <DashboardContainer>
      <LeftSidebar />
      <UsersList />
      <RightSidebar />
    </DashboardContainer>
  );
};

export default index;
