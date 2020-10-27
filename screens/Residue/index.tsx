import React, { useState, useCallback, useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';

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
  Image,
} from './styles';

const RESIDUE_CLASS = {
  a: {
    name: "Resíduos potencialmente infectantes",
    shortDescription: "sondas, curativos, luvas de procedimentos, bolsa de colostomia",
    color: "#A896BE",
  },
  b: {
    name: "Resíduos químicos",
    shortDescription: "reveladores, fixadores de raio x, prata",
    color: "#EBBD6E",
  },
  c: {
    name: "Resíduos radioativos",
    shortDescription: "cobalto, lítio",
    color: "#5571B6",
  },
  d: {
    name: "Resíduos comuns",
    shortDescription: "fraldas, frascos e garrafas pets vazias, marmitex, copos, papel toalha",
    color: "#83B7D6",
  },
  e: {
    name: "Resíduos perfuro-cortantes",
    shortDescription: "agulhas, lâminas de bisturi, frascos e ampolas de medicamentos",
    color: "#A7B177",
  },

};

const Residue: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('a');
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const currentClassData = useMemo(() => RESIDUE_CLASS[selectedClass], [selectedClass]);

  const toogleSearch = useCallback(() => setIsSearching(!isSearching), [isSearching]);
  
  const handleSearch = () => null;
  
  return <Container>
    <Header>
      <SearchBar>
        {isSearching && <InputSearch />}
        <SearchButton onPress={() => setIsSearching(!isSearching)}>
          <Ionicons size={30} name="ios-search" color="#5d5d5d" />
        </SearchButton>
      </SearchBar>
      <Title>
        {currentClassData.name}
      </Title>
      <ShortDescription>
        {currentClassData.shortDescription}
      </ShortDescription>
      <Image>

      </Image>
    </Header>
    <Content>
      {Array.from(Array(100).keys()).map(() => (<Item><ItemName>example</ItemName></Item>))}
    </Content>
    <ResidueClasses>
      {Object.keys(RESIDUE_CLASS).map(residueClass => (
        <ResidueClassContainer
          key={RESIDUE_CLASS[residueClass].name}
          color={RESIDUE_CLASS[residueClass].color}
          isActive={selectedClass === residueClass}
          onPress={() => setSelectedClass(residueClass)}
        >
          <ResidueClassText>
            {residueClass}
          </ResidueClassText>
        </ResidueClassContainer>
      ))}
    </ResidueClasses>
  </Container>;
}

export default Residue;