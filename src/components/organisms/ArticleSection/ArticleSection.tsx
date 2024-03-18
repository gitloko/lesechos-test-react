import { ArticleCard } from "@/components/molecules/ArticleCard/ArticleCard";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import {
  ArticleSectionContainer,
  ArticlesContainer,
  ArticlesGroupContainer,
} from "./ArticleSection.styles";
import Text from "@/components/atoms/Text/Text";
import { Divider } from "@/components/atoms/Divider/Divider";
import { User } from "@/components/molecules/UserCard/UserCard.types";
import { Article } from "./ArticleSection.types";

export const ArticleSection = ({
  selectedUser,
}: {
  selectedUser: User | null;
}): JSX.Element => {
  // i used this to filter articles based on user subscriptions
  const filteredArticles = selectedUser
    ? NEWSLETTER_ITEMS.flatMap((group) =>
        group.filter((article) =>
          article.subscriptions.some((sub) =>
            selectedUser.subscriptions.includes(sub)
          )
        )
      )
    : [];

  //I used this to group articles by site
  const articlesBySite: Record<string, Article[]> = {};
  filteredArticles.forEach((article) => {
    if (!articlesBySite[article.site]) {
      articlesBySite[article.site] = [];
    }
    articlesBySite[article.site].push(article);
  });

  return (
    <ArticleSectionContainer>
      {selectedUser && (
        <>
          <Text as="h3" $font="SourceSansPro" $size="l">
            Subscriptions for {selectedUser.firstName} {selectedUser.lastName}
          </Text>
        </>
      )}
      {Object.entries(articlesBySite).map(([site, articles]) => (
        <ArticlesGroupContainer key={site}>
          <Text as="h3" $font="SourceSansPro" $size="l">
            {site}
          </Text>
          <Divider />
          <ArticlesContainer>
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                description={article.description}
                subscriptions={article.subscriptions}
              />
            ))}
          </ArticlesContainer>
        </ArticlesGroupContainer>
      ))}
    </ArticleSectionContainer>
  );
};
