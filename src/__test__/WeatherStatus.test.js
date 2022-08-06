import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import WeatherStatus from '../components/WeatherStatus';

it('Renders WeatherStatus component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <WeatherStatus />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
