import React from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash/flowRight';

import CheckoutItem from './checkout-item.component';

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
  CLEAR_ITEM_TO_CART
} from '../../graphql/queries';

const CheckoutItemContainer = ({
  cartItem,
  addItem,
  removeItem,
  clearItem
}) => (
  <CheckoutItem
    cartItem={cartItem}
    addItem={addItem}
    removeItem={removeItem}
    clearItem={clearItem}
  />
);

export default compose(
  graphql(ADD_ITEM_TO_CART, { name: 'addItem' }),
  graphql(REMOVE_ITEM_TO_CART, { name: 'removeItem' }),
  graphql(CLEAR_ITEM_TO_CART, { name: 'clearItem' })
)(CheckoutItemContainer);
