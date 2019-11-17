import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProdutImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default class Home extends Component {
  render() {
    return (
      <>
        <FlatList horizontal />
        <Container>
          <Product>
            <ProdutImage />
            <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
            <ProductPrice>R$300.00</ProductPrice>
            <AddButton>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <ProductAmountText>0</ProductAmountText>
              </ProductAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        </Container>
      </>
    );
  }
}
