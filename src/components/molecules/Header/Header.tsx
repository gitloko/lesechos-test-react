import React from "react";
import Text from "@/components/atoms/Text/Text";
import { HeadingContainer } from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeadingContainer>
      <Text as="h2" $size="xl" $font="MerriBold">
        NEWSLETTERS
      </Text>
      <Text as="p" $size="m" $font="SansProRegular">
        Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et
        des marques satellites. Ainsi, vous pouvez découvrir toutes nos
        newsletters selon vos centres d’intérêt et gérer plus facilement
        l’inscription à vos newsletters.
      </Text>
    </HeadingContainer>
  );
};

export default Header;
