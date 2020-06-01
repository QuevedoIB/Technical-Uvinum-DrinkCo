import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import Button from './index';

describe('Testing button', () => {
  test('Button renders text', async () => {
    const component = <Button onPress={() => null} text="test" />;

    const {findByText} = render(component);

    const buttonText = await findByText('test');

    expect(buttonText).toBeTruthy();
  });

  test('Button calls callback onPress', async () => {
    const mockFunction = jest.fn();
    const component = <Button onPress={mockFunction} text="test" />;

    const {getByTestId} = render(component);

    const touchable = await getByTestId('buttonTouchable');

    fireEvent(touchable, 'onPress');
    expect(mockFunction).toHaveBeenCalled();
  });
});
