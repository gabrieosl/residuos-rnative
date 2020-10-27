import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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