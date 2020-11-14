import styled, {css} from 'styled-components/native';


export const Info = styled.TouchableOpacity`
  position: absolute;
  width: 100px;
  height: 32px;
  background: transparent;
  top: 0;
  left: 0;
  margin: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextInfo = styled.Text`
  color: #4e6742;
  font-size:16px;
  font-family: "space-mono-bold";
`;
