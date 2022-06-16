import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/Configurestore';
import RocketPage from '../components/pages/RocketPage';

describe('it renders on the screen:', () => {
  test('it renders Rockets correctly', () => {
    render(
      <Provider store={store}>
        <RocketPage />
      </Provider>,
    );
    expect(screen.queryByText(/Missions/)).toBeNull();
    expect(screen.queryByText(/Description/)).toBeNull();
    expect(screen.queryByText(/Status/)).toBeNull();
  });

  test('it displays snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
