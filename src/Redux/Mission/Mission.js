const url = 'https://api.spacexdata.com/v3/missions';

export const FetchMissions = () => async (dispatch) => {
  const response = await fetch(url);
  const info = await response.json();
  const missionsArray = [];
  info.forEach((e) => {
    const mission = {
      mission_id: e.mission_id,
      mission_name: e.mission_name,
      description: e.description,
    };
    missionsArray.push(mission);
  });
  dispatch(addMission(missionsArray));
};

