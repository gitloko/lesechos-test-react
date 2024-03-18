import ArticleImage from "@/components/atoms/ArticleImage/ArticleImage";
import Text from "@/components/atoms/Text/Text";
import { ArticleCardContainer } from "./ArticleCard.styles";
import { Button } from "@/components/atoms/Button/Button.styles";

interface ArticleCardProps {
  title: string;
  description: string;
  subscriptions: string[];
}

export const ArticleCard = ({
  title,
  description,
  subscriptions,
}: ArticleCardProps): JSX.Element => {
  const buttonVariant = subscriptions.every((sub) => sub === "RIGHT_1")
    ? "primary"
    : "secondary";
  const buttonText = subscriptions.every((sub) => sub === "RIGHT_1")
    ? "S’inscrire"
    : "S'abonner";

  return (
    <ArticleCardContainer>
      <ArticleImage title={title} />
      <Text $size="s" $font="MerriBold" as="p">
        {description}
      </Text>
      <Button $variant={buttonVariant}>{buttonText}</Button>
    </ArticleCardContainer>
  );
};
