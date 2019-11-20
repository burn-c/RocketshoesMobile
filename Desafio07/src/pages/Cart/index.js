import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductDetails,
  ProductTitle,
  ProductImage,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ navigation, total, products }) {
  function decrement(product) {}
  function increment(product) {}

  return (
    <Container>
      <Products>
        {products.map(product => (
          <Product key={product.id}>
            <ProductInfo>
              <ProductImage source={{ uri: product.image }} />
              <ProductDetails>
                <ProductTitle>{product.title}</ProductTitle>
              </ProductDetails>
              <ProductDelete onPress={() => removeFromCart(product.id)}>
                <Icon name="delete-forever" size={24} color="#0e0" />
              </ProductDelete>
            </ProductInfo>
            <ProductControls>
              <ProductControlButton onPress={() => decrement(product)}>
                <Icon name="remove-circle-outline" size={20} color="#0e0" />
              </ProductControlButton>
              <ProductAmount value={String(product.amount)} />
              <ProductControlButton onPress={() => increment(product)}>
                <Icon name="add-circle-outline" size={20} color="#0e0" />
              </ProductControlButton>
              <ProductSubtotal>{product.subtotal}</ProductSubtotal>
            </ProductControls>
          </Product>
        ))}
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>{total}</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}

export default connect()(Cart);
