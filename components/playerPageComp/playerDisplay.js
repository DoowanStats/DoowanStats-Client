import {useState, useEffect} from 'react';
import Link from 'next/link';

function PlayerDisplay(props) {
  const [playerData, setPlayerData] = useState({
    "Top 5 Played": ["loading", "loading", "loading", "loading", "loading"],
    "Team": "loading",
    "Position": "loading",
    "KDA": 0,
    "VS": 0,
    "KP": "loading",
    "Games": 0,
    "WR": "loading",
    "GD@35": 0
  });

  useEffect(() => {
    const fakeDataPlayer = {
      "Faker": {
        "Top 5 Played": ["leblanc", "zed", "azir", "viktor", "lissandra"],
        "Team": "Team Name 1",
        "Position": "Mid",
        "KDA": 10.7,
        "VS": 30,
        "KP": "45%",
        "Games": 23,
        "WR": "90%",
        "GD@35": 15000
      },
      "Gumayushi": {
        "Top 5 Played": ["thresh", "jhin", "rakan", "ashe", "lux"],
        "Team": "Team Name 1",
        "Position": "Support",
        "KDA": 3.0,
        "VS": 45,
        "KP": "50%",
        "Games": 23,
        "WR": "90%",
        "GD@35": 5000
      },
      "Oner": {
        "Top 5 Played": ["leeSin", "veigo", "wukong", "sejuani", "nocturne"],
        "Team": "Team Name 1",
        "Position": "Jungle",
        "KDA": 9.7,
        "VS": 44,
        "KP": "79%",
        "Games": 23,
        "WR": "90%",
        "GD@35": 10000
      },
      "Keria": {
        "Top 5 Played": ["caitlyn", "jhin", "aphelios", "draven", "zeri"],
        "Team": "Team Name 1",
        "Position": "ADC",
        "KDA": 7.7,
        "VS": 30,
        "KP": "45%",
        "Games": 23,
        "WR": "90%",
        "GD@35": 20000
      },
      "Zeus": {
        "Top 5 Played": ["gnar", "ksante", "kennen", "jayce", "jax"],
        "Team": "Team Name 1",
        "Position": "Top",
        "KDA": 8.7,
        "VS": 30,
        "KP": "56%",
        "Games": 23,
        "WR": "90%",
        "GD@35": 10000
      }
    };
    setPlayerData(fakeDataPlayer[props.player]);
  }, [props.player]);

  return (
    <div id="playerOverallPage">
      <div id="top5ChampsLayout">
        <div id="top5title">Top 5 Played Champs</div>
        <u1 id="top5playedChampIndv">
          {playerData["Top 5 Played"].map((champ, i) => {
            return <div className="champPlayerOverall" key={i}>{champ}</div>
          })}
        </u1>
      </div>
      <div id="playerPagesOverallStats">
        <div className="playerStatCards">
          <div>Team</div>
          <div><Link href={`/team/${encodeURIComponent(playerData["Team"])}`}>{playerData["Team"] ?? "Loading"}</Link></div>
        </div>
        <div className="playerStatCards">
          <div>Position</div>
          <div>{playerData["Position"]}</div>
        </div>
        <div className="playerStatCards">
          <div>KDA</div>
          <div>{playerData["KDA"]}</div>
        </div>
        <div className="playerStatCards">
          <div>VS</div>
          <div>{playerData["VS"]}</div>
        </div>
        <div className="playerStatCards">
          <div>KP</div>
          <div>{playerData["KP"]}</div>
        </div>
        <div className="playerStatCards">
          <div>Games</div>
          <div>{playerData["Games"]}</div>
        </div>
        <div className="playerStatCards">
          <div>WR</div>
          <div>{playerData["WR"]}</div>
        </div>
        <div className="playerStatCards">
          <div>GD@35</div>
          <div>{playerData["GD@35"]}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerDisplay;