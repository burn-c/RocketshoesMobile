import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(state => ({
  cartSize: state.cart.length, // pega a quantidade de produtos dentro do cart
}))(Header);
