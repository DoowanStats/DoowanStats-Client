import {useState, useEffect} from 'react';

function StatDisplay(props) {
  const [statData, setStatData] = useState({
    "Season": "Loading",
    "Record": [0, 0, 0],
    "Combat": "Loading",
    "Objective": "Loading",
    "Income": 0
  });

  useEffect(() => {
    const fakeData = {
      "Season": "Winter 22 Aegis",
      "Record": [22,1,0],
      "Combat": "Amazing",
      "Objective": "Loading",
      "Income": 200
    };
    setStatData(fakeData);
  }, [props.teamName])

  return (
    <div id="teamDisplay_statPage">
      <div id="teamDisplay_statPage_buttonLayout">
        <div id="statPage_Season">{statData.Season}</div>
        <div id="statPage_Record">
          <div>{statData.Record[0]} - {statData.Record[1]} - {statData.Record[2]}</div>
        </div>
        <button id="statPage_ChangeSeason">Winter 22</button>
      </div>
      <div id="teamDisplay_statPage_GeneralInfo">
        <div className="statPage_GeneralCards">{statData.Combat}</div>
        <div className="statPage_GeneralCards">{statData.Objective}</div>
        <div className="statPage_GeneralCards">{statData.Income}</div>
      </div>
    </div>
  )
}

export default StatDisplay;