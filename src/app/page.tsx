"use client";
import Header from "@/components/molecules/Header/Header";
import UserCard from "@/components/molecules/UserCard/UserCard";
import { User } from "@/components/molecules/UserCard/UserCard.types";
import { ArticleSection } from "@/components/organisms/ArticleSection/ArticleSection";
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from "@/mocks/user";
import { theme } from "@/styles/global";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

const Page = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(
    USER_WITH_MULTIPLE_SUBSCRIPTION
  );

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {selectedUser && (
        <UserCard user={selectedUser} onSelectUser={handleSelectUser} />
      )}
      <ArticleSection selectedUser={selectedUser} />
    </ThemeProvider>
  );
};

export default Page;
