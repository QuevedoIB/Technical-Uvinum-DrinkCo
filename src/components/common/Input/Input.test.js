import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import Input from './index';

describe('Testing input', () => {
  test('Input renders placeholder and changes text/blurs on touch', async () => {
    const mockFunction = jest.fn();
    const component = (
      <Input
        placeholder="placeholder"
        name="name"
        value=""
        onChange={mockFunction}
        onTouch={mockFunction}
        error=""
      />
    );

    const {getByPlaceholder} = render(component);

    fireEvent(getByPlaceholder('placeholder'), 'onChangeText', 'testText');
    expect(mockFunction).toHaveBeenCalledWith('name', 'testText');

    fireEvent(getByPlaceholder('placeholder'), 'blur');
    expect(mockFunction).toHaveBeenCalled();
  });

  test('Input renders values', async () => {
    const component = (
      <Input
        placeholder=""
        name="name"
        value="test"
        onChange={() => null}
        onTouch={() => null}
        error=""
      />
    );

    const {getByDisplayValue} = render(component);

    const text = await getByDisplayValue('test');

    expect(text).toBeTruthy();
  });

  test('Input renders errors', async () => {
    const component = (
      <Input
        placeholder="placeholder"
        name="name"
        value="test"
        onChange={() => null}
        onTouch={() => null}
        error="error"
      />
    );

    const {findByText} = render(component);

    const error = await findByText('error');

    expect(error).toBeTruthy();
  });
});
