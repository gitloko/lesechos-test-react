import {
  SquareContainer,
  StyledText,
  TextWrapper,
} from "./ArticleImage.styles";

interface ArticleImageProps {
  title: string;
}

const ArticleImage = ({ title }: ArticleImageProps): JSX.Element => {
  return (
    <SquareContainer>
      <TextWrapper>
        <StyledText as="h2" $size="l" $font="MerriBold" $color="white">
          {title}
        </StyledText>
      </TextWrapper>
    </SquareContainer>
  );
};

export default ArticleImage;
