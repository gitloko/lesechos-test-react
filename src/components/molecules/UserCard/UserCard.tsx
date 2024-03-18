import Text from "@/components/atoms/Text/Text";
import UserButton from "@/components/atoms/UserButton/UserButton";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";
import { UCButtonWrapper, UserCardContainer } from "./UserCard.styles";
import { UserCardProps } from "./UserCard.types";

const UserCard: React.FC<UserCardProps> = ({ onSelectUser }) => {
  return (
    <UserCardContainer>
      <Text>Select User Type</Text>
      <UCButtonWrapper>
        <UserButton
          user={USER_WITH_ONE_SUBSCRIPTION}
          onClick={() => onSelectUser(USER_WITH_ONE_SUBSCRIPTION)}
        />
        <UserButton
          user={USER_WITHOUT_SUBSCRIPTION}
          onClick={() => onSelectUser(USER_WITHOUT_SUBSCRIPTION)}
        />
        <UserButton
          user={USER_WITH_MULTIPLE_SUBSCRIPTION}
          onClick={() => onSelectUser(USER_WITH_MULTIPLE_SUBSCRIPTION)}
        />
      </UCButtonWrapper>
    </UserCardContainer>
  );
};

export default UserCard;
