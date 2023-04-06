import {useEffect, useState} from 'react';

function ScoutLog(props) {
  const [scoutData, setScoutData] = useState({
    "Bans Against": [["Loading"]],
    "Bans By": ["Loading"]
  });
  const [against, setAgainst] = useState(0);

  useEffect(() => {
    setScoutData(props.data);
  }, [props.data]);

  const handleScoutChange = (e) => {
    e.preventDefault();
    setAgainst(e.target.value);
  }

  function ScoutContent() {
    if (against == 0) {
      return (
          <u1 className="scoutData_AgainstAllEntry">
            {scoutData["Bans Against"].map((bans, i) => {
              return (
                  <u1 id="scoutData_Against_SingleRowEntry" key={i}>
                    {bans.map((data, j) => {
                      return <div id="scoutData_Against_SingleData" key={j}>{data}</div>
                    })}
                  </u1>
              );
            })}
          </u1>
      );
    } else {
      return (
          <u1 className="scoutData_ByAllEntry">
            {scoutData["Bans By"].map((by, k) => {
              return <div id="scoutData_By_SingleEntry" key={k}>{by}</div>
            })}
          </u1>
      );
    }
  }

  return (
    <div id="teamDisplay_scoutPage">
      <div id="scoutPage_buttonLayout">
        <button id="scoutBanAgainst" value={0} onClick={handleScoutChange}>Bans Against Team</button>
        <button id="scoutBanBy" value={1} onClick={handleScoutChange}>Bans By Team</button>
      </div>
      <ScoutContent/>
    </div>
  );
}

export default ScoutLog;