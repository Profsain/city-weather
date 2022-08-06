import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configurestore';
import WeatherCard from '../components/WeatherCard';

it('Renders WeatherCard component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <WeatherCard />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
