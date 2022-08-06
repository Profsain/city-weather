import React from 'react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configurestore';
import WeatherDetails from '../components/WeatherDetails';

it('Renders WeatherDetails component correctly', () => {
  const history = createMemoryHistory();

  const tree = renderer.create(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <WeatherDetails />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
