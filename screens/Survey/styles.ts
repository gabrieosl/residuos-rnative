import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 32px;
`;

export const Title = styled.Text`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 28px;
  color: #2b2b2b;

  text-align: center;
  font-family: "space-mono-bold";
  background-color: #B4D4A5;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`;

export const Button = styled.TouchableOpacity`
  box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  border-radius: 5px;
  background: #3b3b3b;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: #e3e3e3
`;

export const SubTitle = styled.Text`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 18px;
  color: #2b2b2b;
  text-align: center;
`;


export const Image = styled.Image`
  height: 150px;
  width: 100%;

`;

interface ImageBonecoProps {
  flip? : boolean;
}

export const ImageBoneco = styled.Image<ImageBonecoProps>`
  height: 80px;
  width: 80px; 
  ${props => props.flip && css`
  transform: scaleX(-1);
  `}
`;

export const Button2 = styled.TouchableOpacity`
  width: 100%;
  height: 36px;
  margin: 10px;
  background: #B4D4A5;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
`;

export const ItemText = styled.Text`
  color: #000;
  font-size:22px;
  margin: 5px 0;
  text-transform: uppercase;
`;

export const ImagesRow = styled.View`
  width: 40%;
`;

export const ButtonsRow = styled.View``;

export const Content = styled.View`
  justify-content: space-around;
  flex: 1;
`;