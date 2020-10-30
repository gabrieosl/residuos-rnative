import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;


export const Header = styled.View`
  padding: 15px;
   
  margin-top: 30px;
  position: relative;
  
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
  min-height: 55px;
`;

export const ShortDescription = styled.Text`
  font-size: 14px;
  color: #2d2d2d;

`;

interface ImageProps {
  image: string;
}
export const Image = styled.View<ImageProps>`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* width: 100%;
  height: 100%; */

  background-image: url(${props=> props.image});
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 10%;
  z-index: -1;
  opacity: 0.5;

`;

export const Content = styled.ScrollView`
  flex: 1;
  margin: 15px;
  padding: 10px;
  background: #e2e2e2;
  border-radius: 12px;
  margin-top: 0;
`;

export const Item = styled.View`
  margin: 3px 0;
`;
export const ItemName = styled.Text`
  font-size: 16px;
  color: #2b2b2b;
  text-transform: capitalize;
  padding: 5px;
  margin: 3px;
  background: #F2F2F2;
  border-radius: 4px;

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

export const MoreButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MoreBox = styled.Image`
  height: 200px;
  width: 100%;
`;

export const SeeMoreText = styled.Text`
  font-size: 14px;
  color: #444;
  margin-right: 10px;
`;