import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../Redux/Configurestore';
import Nav from '../Navbar';
import '@testing-library/jest-dom/extend-expect';

test('test the MissionPage snapshot', () => {
  const missionRenderer = renderer.create(
    <Provider store={store}>
    <BrowserRouter>
      <Nav />
      </BrowserRouter>
    </Provider>
    ,
  ).toJSON();
  expect(missionRenderer).toMatchSnapshot();
});