import React, { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";

import { Container, Button, ButtonText } from "./styles";

const Info: React.FC = () => {
  const handleClick = useCallback(async () => {
    await WebBrowser.openBrowserAsync(
      "https://docs.google.com/forms/d/e/1FAIpQLSd15JZh3hNjSMFgrFmuYwgrg3TG3X3R9y1G4Ibmshpkh0bZ3A/viewform?usp=sf_link"
    );
  }, []);
  return (
    <Container>
      <Button onPress={handleClick}>
        <ButtonText>Clique aqui para participar da pesquisa (?)</ButtonText>
      </Button>
    </Container>
  );
};

export default Info;
