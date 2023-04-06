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
    <div>
      <div>
        <div>{statData.Season}</div>
        <div>
          <div>{statData.Record[0]} - {statData.Record[1]} - {statData.Record[2]}</div>
        </div>
        <button>Winter 22</button>
      </div>
      <div>
        <div>{statData.Combat}</div>
        <div>{statData.Objective}</div>
        <div>{statData.Income}</div>
      </div>
    </div>
  )
}

export default StatDisplay;