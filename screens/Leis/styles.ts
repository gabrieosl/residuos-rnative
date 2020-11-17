import styled, {css} from 'styled-components/native';

export const Info = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  background: transparent;
  border-width: 4px;
  border-color: #B4D4A5;
  border-radius: 50%;
  bottom: 0;
  left: 0;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextInfo = styled.Text`
  color: #B4D4A5;
  font-size:24px;
  font-family: "space-mono-bold";
`;


export const Container = styled.ScrollView`
  flex: 1;
  background: #ffffff;
  padding-bottom: 50px;
`;

export const Title = styled.Text`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 28px;
  color: #2b2b2b;
  font-family: "space-mono-bold";
`;

export const SubTitle = styled.Text`
  margin-top: 12px;
  margin-bottom: 12px;
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
  margin-bottom: 15px;
  ${props => props.flip && css`
  transform: scaleX(-1);
  `}
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  max-height: 48px;
  margin: 6px;
  padding: 3px 10px;
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