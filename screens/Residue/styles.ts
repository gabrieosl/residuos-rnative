import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 15px;
`;

export const SearchBar = styled.View`
  flex-direction: row;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #2b2b2b;

  margin: 0 10px;

  color: #2b2b2b;
  font-size: 20px;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-left: auto;

`;

export const Title = styled.Text`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 28px;
  color: #2b2b2b;
`;

export const ShortDescription = styled.Text`
  font-size: 14px;
  color: #5d5d5d;

`;


export const Image = styled.View``;

export const Content = styled.ScrollView`
  flex: 1;
  margin: 15px;
  padding: 10px;
  background: #e2e2e2;
  border-radius: 12px;
`;

export const Item = styled.View`
  margin: 3px 0;
`;
export const ItemName = styled.Text`
  font-size: 16px;
  color: #2b2b2b;
  text-transform: capitalize
`;

export const ResidueClasses = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  
  padding: 3vw 0;
`;

interface ResidueClassProps {
  color: string;
  isActive: boolean;
}

export const ResidueClassContainer = styled.TouchableOpacity<ResidueClassProps>`
  width: 13vw;
  height: 13vw;
  background: ${(props) => props.color};
  
  justify-content: center;
  align-items: center;
  
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => props.color};

  transform: rotate(45deg);

  ${(props) => props.isActive ? css`
    /* box-shadow: 0 0 15px ${`${props.color}`}; */
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
  ` : css`
    opacity: 0.3;
  `}
`;

export const ResidueClassText = styled.Text`
  font-size: 5vw;
  text-transform: capitalize;
  color: #fff;
  transform: rotate(-45deg);
`;
