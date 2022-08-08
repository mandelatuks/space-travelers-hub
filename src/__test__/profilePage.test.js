import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/Configurestore';
import Profile from '../components/pages/ProfilePage';

test('test the MissionPage snapshot', () => {
  const missionRenderer = renderer.create(
    <Provider store={store}>
      <BrowserRouter>

        <Profile />
      </BrowserRouter>
    </Provider>
    ,
  ).toJSON();
  expect(missionRenderer).toMatchSnapshot();
});
