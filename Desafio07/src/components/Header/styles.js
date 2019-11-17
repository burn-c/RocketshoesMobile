import styled from 'styled-components/native';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #000;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  color: #fff;
  font-size: 15px;
  background: #7159c1;
  padding: 2px;
  border-radius: 9px;
  text-align: center;
  position: absolute;
  top: -7px;
  right: -7px;
  min-width: 18px;
  min-height: 18px;
  overflow: hidden;
`;
