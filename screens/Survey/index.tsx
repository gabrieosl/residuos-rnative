import React from 'react';

import { Container, Button, ButtonText } from './styles';

const Info: React.FC = () => {
  return (
    <Container>
      <Button>
        <ButtonText>
          Clique aqui para participar da pesquisa (?)
        </ButtonText>
      </Button>
    </Container>
  );
}

export default Info;