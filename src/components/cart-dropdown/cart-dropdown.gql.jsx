import React from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash/flowRight';

import CartDropdown from './cart-dropdown.component';

import { TOGGLE_CART_HIDDEN, GET_CART_ITEMS } from '../../graphql/queries';

const CartDropdownContainer = ({ cart: { cartItems }, toggleCartHidden }) => (
  <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
);

export default compose(
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
  graphql(GET_CART_ITEMS, { name: 'cart' })
)(CartDropdownContainer);
