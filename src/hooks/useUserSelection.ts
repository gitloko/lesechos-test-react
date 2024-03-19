import { useState, useEffect } from "react";
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from "@/mocks/user";
import { User } from "@/components/molecules/UserCard/UserCard.types";

export const useUserSelection = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setSelectedUser(USER_WITH_MULTIPLE_SUBSCRIPTION);
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return { selectedUser, handleSelectUser };
};
