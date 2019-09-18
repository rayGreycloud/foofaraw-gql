import React from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash/flowRight';

import CartIcon from './cart-icon.component';

import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNT } from '../../graphql/queries';

const CartIconContainer = ({ cart: { itemCount }, toggleCartHidden }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
);

export default compose(
  graphql(GET_ITEM_COUNT, { name: 'cart' }),
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartIconContainer);
