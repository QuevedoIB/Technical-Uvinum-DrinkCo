import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {Provider} from 'react-redux';
import store from '../../../redux/store';
import {addCartItem} from '../../../redux/actions/cart';

import CartCard from './index';

describe('Testing cart card', () => {
  const component = (
    <Provider store={store}>
      <CartCard
        item={{
          item_id: 1,
          name: "Martin Miller's Gin",
          price: 20.35,
          qty: 2,
        }}
        image="https://media-verticommnetwork1.netdna-ssl.com/wines/martin-millers-gin-437525_e.jpg"
      />
    </Provider>
  );
  test('Quantity buttons are rendered and increase and decrease quantity', async () => {
    await store.dispatch(
      addCartItem({
        item_id: 1,
        name: "Martin Miller's Gin",
        price: 20.35,
        qty: 2,
      }),
    );

    const {getByTestId} = render(component);

    const increaseButton = await getByTestId('increaseTouchable');
    const decreaseButton = await getByTestId('decreaseTouchable');

    expect(increaseButton).toBeTruthy();
    expect(decreaseButton).toBeTruthy();

    fireEvent(increaseButton, 'onPress');

    const {
      cart: {items: itemsAfterIncrease},
    } = store.getState();

    expect(itemsAfterIncrease.length).toEqual(1);
    expect(itemsAfterIncrease[0].qty).toEqual(3);

    fireEvent(decreaseButton, 'onPress');

    const {
      cart: {items: itemsAfterDecrease},
    } = store.getState();

    expect(itemsAfterDecrease[0].qty).toEqual(1);
  });
  test('Card has name, price and quantity', async () => {
    const {getByText} = render(component);
    const name = await getByText("Martin Miller's Gin");
    const price = await getByText('20.35€');
    const qty = await getByText('2');
    expect(name).toBeTruthy();
    expect(price).toBeTruthy();
    expect(qty).toBeTruthy();
  });
  test('Item subtotal is properly calculated and displayed', async () => {
    const {getByTestId} = render(component);
    const subtotal = await getByTestId('subtotal');
    expect(subtotal).toBeTruthy();
    expect(
      subtotal._fiber.stateNode.props.children.includes(20.35 * 2),
    ).toBeTruthy();
  });
  test('Item image is rendered and has proper url', async () => {
    const {getByTestId} = render(component);
    const image = await getByTestId('cardImage');
    expect(image).toBeTruthy();
    expect(image._fiber.stateNode.props.source).toEqual({
      uri:
        'https://media-verticommnetwork1.netdna-ssl.com/wines/martin-millers-gin-437525_e.jpg',
    });
  });
});
