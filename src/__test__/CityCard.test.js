import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configurestore';
import CityCard from '../components/CityCard';

it('Renders CityCard component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CityCard />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
