const ADD_MISSION = 'space-travellers-hub/redux/rocket/ADD_MISSION';

const initialState = [];
const url = 'https://api.spacexdata.com/v3/missions';

export const addMission = (missions) => ({
  type: ADD_MISSION,
  missions,
});

export const FetchMissions = () => async (dispatch) => {
  const response = await fetch(url);
  const info = await response.json();
  const rocketsArray = [];
  info.forEach((e) => {
    const rocket = {
      mission_id: e.mission_id,
      mission_name: e.mission_name,
      description: e.description,
    };
    rocketsArray.push(rocket);
  });
  dispatch(addMission(rocketsArray));
};

const reducer = (state = initialState, action) => {
  if (action.type === ADD_MISSION) {
    return [...action.missions];
  }
  return state;
};
export default reducer;
