import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import StatusCards from '../components/StatusCards';

it('Renders StatusCards component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <StatusCards />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
