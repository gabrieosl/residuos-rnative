import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 28px;
  color: #2b2b2b;
`;

export const Image = styled.Image`
  height: 150px;
  width: 100%;

`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 36px;
  margin: 20px;
  background: #a3a3a3;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size:22px;
  text-transform: uppercase;
`;