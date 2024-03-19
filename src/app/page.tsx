"use client";
import Header from "@/components/molecules/Header/Header";
import UserCard from "@/components/molecules/UserCard/UserCard";
import { ArticleSection } from "@/components/organisms/ArticleSection/ArticleSection";
import { useUserSelection } from "@/hooks/useUserSelection";
import { theme } from "@/styles/global";
import { ThemeProvider } from "styled-components";

const Page = () => {
  const { selectedUser, handleSelectUser } = useUserSelection();

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
