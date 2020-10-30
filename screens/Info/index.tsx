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

      <LinkButton
        onPress={() =>
          handleClick(
            "https://docs.google.com/forms/d/e/1FAIpQLSd15JZh3hNjSMFgrFmuYwgrg3TG3X3R9y1G4Ibmshpkh0bZ3A/viewform?usp=sf_link"
          )
        }
      >
        <LinkText>
          https://docs.google.com/forms/d/e/1FAIpQLSd15JZh3hNjSMFgrFmuYwgrg3TG3X3R9y1G4Ibmshpkh0bZ3A/viewform?usp=sf_link
        </LinkText>
      </LinkButton>
      <LinkButton
        onPress={() =>
          handleClick(
            "https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/8436198/do1-2018-03-29-resolucao-rdc-n-222-de-28-de-marco-de-2018-8436194"
          )
        }
      >
        <LinkText>
          https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/8436198/do1-2018-03-29-resolucao-rdc-n-222-de-28-de-marco-de-2018-8436194
        </LinkText>
      </LinkButton>
      <LinkButton
        onPress={() =>
          handleClick(
            "http://www2.mma.gov.br/port/conama/legiabre.cfm?codlegi=462"
          )
        }
      >
        <LinkText>
          http://www2.mma.gov.br/port/conama/legiabre.cfm?codlegi=462
        </LinkText>
      </LinkButton>
      <LinkButton
        onPress={() =>
          handleClick(
            "http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm"
          )
        }
      >
        <LinkText>
          http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm
        </LinkText>
      </LinkButton>
      <LinkButton
        onPress={() =>
          handleClick(
            "https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0306_07_12_2004.htmlhttps://analiticaqmcresiduos.paginas.ufsc.br/files/2014/07/Nbr-10004-2004-Classificacao-De-Residuos-Solidos.pdf"
          )
        }
      >
        <LinkText>
          https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2004/res0306_07_12_2004.htmlhttps://analiticaqmcresiduos.paginas.ufsc.br/files/2014/07/Nbr-10004-2004-Classificacao-De-Residuos-Solidos.pdf
        </LinkText>
      </LinkButton>
    </Container>
  );
};

export default Info;
