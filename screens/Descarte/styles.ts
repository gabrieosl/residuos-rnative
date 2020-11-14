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
  font-family: "space-mono-bold";
  background-color: #B4D4A5;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
`;

export const SubTitle = styled.Text`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 18px;
  color: #2b2b2b;
  text-align: center;
`;

export const SubTitle2 = styled.Text`
  font-size: 14px;
  margin-top: 18px;
  color: #2b2b2b;
  text-align: justify;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100%;

`;

export const ImageTitle = styled.Text`
  font-family: "space-mono-bold";
`;
export const Font = styled.Text`
  font-size: 12px;
  text-align: left;
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

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 36px;
  margin: 10px;
  background: #B4D4A5;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size:22px;
  text-transform: uppercase;
`;

export const ImagesRow = styled.View`
  width: 40%;
`;

export const ButtonsRow = styled.View``;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;