import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configurestore';
import SingleCard from '../components/SingleCard';

it('Renders SingleCard component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <SingleCard />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
