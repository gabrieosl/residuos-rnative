import React, { useState, useCallback, useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Content,
  SearchBar,
  InputSearch,
  SearchButton,
  ResidueClasses,
  ResidueClassContainer,
  ResidueClassText,
  Title,
  ShortDescription,
  Item,
  ItemName,
  SubGroupItemName,
  Image,
  MoreButton,
  MoreBox,
  SeeMoreText,
} from "./styles";

import Ga from "../../assets/images/a.png";
import Gb from "../../assets/images/b.png";
import Gc from "../../assets/images/c.png";
import Gd from "../../assets/images/d.png";
import Ge from "../../assets/images/e.png";

import Descartea from "../../assets/images/descartea.jpg";
import Descarteb from "../../assets/images/descarteb.jpg";
import Descartec from "../../assets/images/descartec.jpg";
import Descarted from "../../assets/images/descarted.jpg";
import Descartee from "../../assets/images/descartee.jpg";
import GoBack from "../../components/BackButton";

const RESIDUE_CLASS = {
  a: {
    name: "Resíduos potencialmente infectantes",
    descarte: Descartea,
    shortDescription:
      "sondas, curativos, luvas de procedimentos, bolsa de colostomia",
    image: Ga,
    color: "#A896BE",
    examples: [
      "SUBGROUP:Subgrupo A1",
      "Culturas ",
      "Estoques de microorganismos",
      "Resíduos de fabricação de produtos biológicos",
      "Descarte de vacinas de microorganismos vivos ou atenuados",
      "Meios de cultura",
      "Instrumentois utilizados para transferência",
      "Inoculação ou mistura de culturas",
      "Resíduos de laboratórios de manipulação genética",
      "SUBGROUP:Subgrupo A2",
      "Resíduos resultantes da atenção à saúde de indivíduos ou animais",
      "Microorganismos com relevância epidemiológica ",
      "Vausadores de doença emergente",
      "Bolsas transfusionais contendo sangue ou hemocomponentes",
      "Sobras de amostras de laboratório contendo sangue ou líquidos corpóreos",
      "Carcaças de humanos ou animais",
      "SUBGROUP:Subgrupo A3",
      "Peças anatomicas",
      "Visceras",
      "Residuos provenientes de animais",
      "Cadavers de humanos ou animais",
      "SUBGROUP:Subgrupo A4",
      "Kits de linhas arteriais",
      "Filtros de ar e gases aspirados de area contaminada",
      "Sobras de amostras de laboratório",
      "Recipientes contendo fezes, urina, secreções",
      "Resíduos de tecido adiposo proveniente de lipoaspiração, lipoescultura",
      "Microorganismos com suspeita de príons",
      "Bolsas transfusionais vazias ou com volume residual pós-transfusão",
      "SUBGROUP:Subgrupo A5",
      "Órgãos, tecidos e fluidos orgânicos de alta infectividade para príons, de casos suspeitos ou confirmados, bem como quaisquer materiais resultantes da atenção à saúde de indivíduos ou animais, suspeitos ou confirmados, e que tiveram contato com órgãos, tecidos e fluidos de alta infectividade para príons",
    ],
  },
  b: {
    name: "Resíduos químicos",
    descarte: Descarteb,
    shortDescription: "reveladores, fixadores de raio x, prata",
    color: "#EBBD6E",
    image: Gb,
    examples: [
      "produtos hormonais",
      "produtos antimicrobianos",
      "citostáticos",
      "antineoplásticos",
      "imunossupressores",
      "digitálicos",
      "imunomoduladores",
      "anti-retrovirais",
      "resíduos de medicamentos controlados",
      "resíduos de saneantes",
      "desinfetantes",
      "residuos contendo metais pesados",
      "reagentes para laboratório",
      "recipeientes contaminados pelos reagentes",
      "Efluentes de processadores de imagem(reveladores e fixadores)",
      "Efluentes dos equipamentos automatizados utilizados em análises clínicas",
      "Demais produtos considerados perigosos conforme a NBR 10004 da ABNT",
    ],
  },
  c: {
    name: "Resíduos radioativos",
    descarte: Descartec,
    shortDescription: "cobalto, lítio",
    color: "#5571B6",
    image: Gc,
    examples: [
      "rejeitos radioativos ",
      "contaminados com radionuclídeos, provenientes de laboratórios de análises clínicas",
      "serviços de medicina nuclear e radioterapia, segundo a Resolução CNEN-6.05.",
    ],
  },
  d: {
    name: "Resíduos comuns",
    descarte: Descarted,
    shortDescription:
      "fraldas, frascos e garrafas pets vazias, marmitex, copos, papel toalha",
    image: Gd,
    color: "#83B7D6",
    examples: [
      "Papel de uso sanitário ",
      "Sobras de alimentos",
      "resíduos provenientes das aréas administrativas",
      "Resto alimentar de refeitório",
      "Resíduos de varrição, flores, podas e jardins.",
      "Resíduos de gesso provenientes de assistência à saúde",
      "fraldas",
      "absorventes higiênicos",
      "peças descartáveis de vestuário",
      "resto alimentar de pacientes",
      "material utilizado em antisepsia e hemostasia de venóclises, ",
      "equipamento de soro e outros similares não classificados como A1",
    ],
  },
  e: {
    name: "Resíduos perfuro-cortantes",
    descarte: Descartee,
    shortDescription:
      "agulhas, lâminas de bisturi, frascos e ampolas de medicamentos",
    image: Ge,
    color: "#A7B177",
    examples: [
      "Materiais perfurocortantes ou esclarificantes",
      "lâminas de barbear,",
      "agulhas",
      "escalpes",
      "ampolas de vidro",
      "brocas",
      "limas endodônticas",
      "pontas diamantadas",
      "lâminas de bisturi",
      "lancetas",
      "tubos capilares",
      "micropipetas",
      "lâminas",
      "lamínula",
      "espátulas",
      "utensilios de vidro quebrados no laboratório",
      "pipetas",
      "tubos de coleta sanguinea e placas petri",
    ],
  },
};

const Residue: React.FC = ({ navigation }) => {
  const [selectedClass, setSelectedClass] = useState("a");
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const currentClassData = useMemo(() => RESIDUE_CLASS[selectedClass], [
    selectedClass,
  ]);

  const toogleSearch = useCallback(() => setIsSearching(!isSearching), [
    isSearching,
  ]);

  const handleSearch = () => null;

  return (
    <Container>
      <GoBack navigation={navigation} />
      <Header>
        {/* <SearchBar>
          {isSearching && <InputSearch />}
          <SearchButton onPress={() => setIsSearching(!isSearching)}>
            <Ionicons size={30} name="ios-search" color="#5d5d5d" />
          </SearchButton>
        </SearchBar> */}
        <Title>{currentClassData.name}</Title>
        <ShortDescription>{currentClassData.shortDescription}</ShortDescription>
        <Image image={currentClassData.image} />
        {isMoreOpen ? (
          <>
            <MoreBox source={currentClassData.descarte} resizeMode="contain" />
            <MoreButton onPress={() => setIsMoreOpen(false)}>
              <SeeMoreText>Ver menos</SeeMoreText>
              <Ionicons name="ios-arrow-up" size={24} color="#444" />
            </MoreButton>
          </>
        ) : (
          <MoreButton onPress={() => setIsMoreOpen(true)}>
            <SeeMoreText>Ver mais</SeeMoreText>
            <Ionicons name="ios-arrow-down" size={24} color="#444" />
          </MoreButton>
        )}
      </Header>
      <Content>
        {currentClassData.examples.map((example) => (
          example.startsWith('SUBGROUP:' ) ? (
            <Item>
              <SubGroupItemName>{example.substring(9)}</SubGroupItemName>
            </Item>
          ) : (
            <Item>
              <ItemName>{example}</ItemName>
            </Item>
          )
        ))}
      </Content>
      <ResidueClasses>
        {Object.keys(RESIDUE_CLASS).map((residueClass) => (
          <ResidueClassContainer
            key={RESIDUE_CLASS[residueClass].name}
            color={RESIDUE_CLASS[residueClass].color}
            isActive={selectedClass === residueClass}
            onPress={() => setSelectedClass(residueClass)}
          >
            <ResidueClassText>{residueClass}</ResidueClassText>
          </ResidueClassContainer>
        ))}
      </ResidueClasses>
    </Container>
  );
};

export default Residue;
