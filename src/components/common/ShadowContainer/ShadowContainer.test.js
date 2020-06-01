import React from 'react';
import {View, Text} from 'react-native';
import {render} from 'react-native-testing-library';

import ShadowContainer from './index';

describe('Testing Shadow Container', () => {
  test('Shadow container renders children and has shadow styles', async () => {
    const component = (
      <ShadowContainer onPress={() => null} text="test">
        <Text>testChild</Text>
        <View testID={'shadowChildren'} />
      </ShadowContainer>
    );

    const {getByTestId, getByText} = render(component);

    const container = await getByTestId('shadowContainer');
    const child1 = await getByTestId('shadowChildren');
    const child2 = await getByText('testChild');

    expect(child1).toBeTruthy();
    expect(child2).toBeTruthy();

    expect(container.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: 'white',
          overflow: 'hidden',
        }),
      ]),
    );
  });
});
