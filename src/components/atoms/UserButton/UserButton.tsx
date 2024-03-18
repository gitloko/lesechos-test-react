import { UButton } from "./UserButton.styled";
import { UserButtonProps } from "./UserButton.types";

const UserButton: React.FC<UserButtonProps> = ({ user, onClick }) => {
  return (
    <UButton onClick={onClick}>{`${user.firstName} ${user.lastName}`}</UButton>
  );
};

export default UserButton;
