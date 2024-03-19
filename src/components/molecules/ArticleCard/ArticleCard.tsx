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
  const hasSubscriptionRights = subscriptions.some(
    (sub) => sub === "RIGHT_1" || sub === "RIGHT_2"
  );
  const buttonVariant = hasSubscriptionRights ? "primary" : "secondary";
  const buttonText = hasSubscriptionRights ? "S'inscrire" : "S'abonner";

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
