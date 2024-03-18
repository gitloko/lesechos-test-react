import { User } from "@/components/molecules/UserCard/UserCard.types";

export interface UserButtonProps {
  user: User;
  onClick: () => void;
}
