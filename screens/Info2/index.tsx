import React, { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";

import {
  Container,
  Title,
  Title2,
  Title3,
  LinkButton,
  LinkText,
} from "./styles";

const Info: React.FC = () => {
  const handleClick = useCallback(async (link) => {
    await WebBrowser.openBrowserAsync(link);
  }, []);
  return (
    <Container>
      <Title>Geradores de RSS</Title>
      <Title2>Assistência domiciliar</Title2>
      <Title2>Laboratórios analíticos de produtos para a saúde</Title2>
      <Title2>Necrotérios e funerárias </Title2>
      <Title2>Estabelecimento de ensino e pesquisa</Title2>
      <Title2>Centro de controle de zoonoses</Title2>
      <Title2>Distribuidor de produtos farmacêuticos</Title2>
      <Title2>
        Importadores, distribuidores de materiais e controles para diagnóstico
        in vitro
      </Title2>
      <Title2>Unidades móveis de atendimento à saúde</Title2>

      <Title>Links</Title>
      <Title3>Legislações ambientais referente aos RSS</Title3>
    </Container>
  );
};

export default Info;
