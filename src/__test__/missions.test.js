import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/Configurestore';
import Mission from '../components/pages/MissionPage';

test('test the MissionPage snapshot', () => {
  const missionRenderer = renderer.create(
    <Provider store={store}>
      <BrowserRouter>

        <Mission />
      </BrowserRouter>
    </Provider>
    ,
  ).toJSON();
  expect(missionRenderer).toMatchSnapshot();
});
