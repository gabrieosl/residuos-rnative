import React from "react";
import AllG from "../../assets/images/allG.jpg";
import AllD from "../../assets/images/allD.jpg";

import { Container, Title, Image, Button, ButtonText } from "./styles";

const Home: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Title>
        Identificação, segregação, acondicionamento e descarte de RSS
      </Title>
      <Image source={AllG} resizeMode="contain" />
      <Image source={AllD} resizeMode="contain" />
      <Button onPress={() => navigation.navigate("Root")}>
        <ButtonText>Iniciar</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
