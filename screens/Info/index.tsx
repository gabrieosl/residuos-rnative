import React, { useCallback } from "react";
import { ScrollView } from "react-native";
import * as WebBrowser from "expo-web-browser";

import segregacao from "../../assets/images/descarte.png";

import {
  Container,
  Title,
  SubTitle,
  LinkButton,
  SubTitle2,
  LinksContainer,
  LinkText,
  Image,
  ImageTitle,
  Font,
  Button,
  ButtonText,
  Content,
  ImagesRow,
  ButtonsRow,
  ImageBoneco,
} from "./styles";
import GoBack from "../../components/BackButton";

const Home: React.FC = ({ navigation }) => {
  const handleClick = useCallback(async (link) => {
    await WebBrowser.openBrowserAsync(link);
  }, []);

  return (
    <Container>
      <GoBack navigation={navigation} />
      <Title>SAIBA MAIS SOBRE OS RSS`s</Title>
      <SubTitle>
        Seguem abaixo links para legislações ambientais referentes ao RSS
      </SubTitle>
      <LinksContainer>
        <LinkButton
          onPress={() =>
            handleClick(
              "https://wp.ufpel.edu.br/residuos/files/2014/04/NBR-12808-1993-Res%C3%ADduos-de-servi%C3%A7os-de-sa%C3%BAde.pdf"
            )
          }
        >
          <LinkText>NBR 12808:1993 Resíduos de serviços de saúde</LinkText>
        </LinkButton>
        <LinkButton
          onPress={() =>
            handleClick(
              "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiC9-LQ5PDsAhVbHbkGHX3-D9QQFjAAegQIBBAC&url=http%3A%2F%2Fwww.vigilanciasanitaria.sc.gov.br%2Findex.php%2Fjoomlaorg%2F2013-08-13-20-53-09%2Fcategory%2F119-saude-ambiental%3Fdownload%3D768%3Anbr-n-12-809-1997-manuseio-de-residuos-de-servico-de-saude&usg=AOvVaw0blJrn2ChZR-qk2FykNula"
            )
          }
        >
          <LinkText>NBR 12809:1993 Manuseio de resíduos de saúde</LinkText>
        </LinkButton>
        <LinkButton
          onPress={() =>
            handleClick(
              "https://wp.ufpel.edu.br/residuos/files/2014/04/NBR-12810-1993-Coleta-de-res%C3%ADduos-de-servi%C3%A7os-de-sa%C3%BAde.pdf"
            )
          }
        >
          <LinkText>
            NBR 12810:1993 Coleta de resíduos de serviços de saúde
          </LinkText>
        </LinkButton>

        <LinkButton
          onPress={() =>
            handleClick(
              "http://licenciadorambiental.com.br/wp-content/uploads/2015/01/NBR-7.500-Simbolos-de-Risco-e-Manuseio-Para-o-Transporte-e-Armazenamento-De-Materiais.pdf"
            )
          }
        >
          <LinkText>
            NBR 7500:2005 Símbolos de risco e manuseio para o transporte e
            armazenamento de materiais.
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
      </LinksContainer>

      {/* <Content>
        <ImagesRow>
          <ImageBoneco source={boneco1} resizeMode="contain" />
          <ImageBoneco source={boneco2} resizeMode="contain" flip />
          <ImageBoneco source={boneco3} resizeMode="contain" flip />
          <ImageBoneco source={boneco4} resizeMode="contain" />
        </ImagesRow>
        <ButtonsRow>
          <Button onPress={() => navigation.navigate("Generators")}>
            <ButtonText>Geradores</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Groups")}>
            <ButtonText>Grupos</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Segregação</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Descarte</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Leis</ButtonText>
          </Button>
          <Button onPress={() => navigation.navigate("Root")}>
            <ButtonText>Quiz</ButtonText>
          </Button>
        </ButtonsRow>
      </Content> */}
    </Container>
  );
};

export default Home;
