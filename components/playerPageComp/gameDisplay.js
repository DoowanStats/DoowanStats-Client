import {useState, useEffect} from 'react';
import Link from 'next/link';

function GameDisplay(props) {
  const [gameDataPlayer, setGameDataPlayer] = useState([
    ["Loading", "Loading", "Loading", "Loading", "Loading", "Loading"]
  ]);

  useEffect(() => {
    const fakeGameDataPlayer = {
      "Faker": [
        ["01-02-2023", "Team Name 1", "Leblanc", "5/1/3", "Overall Stats", "Differntials"],
        ["01-08-2023", "Team Name 1", "Zed", "6/2/4", "Overall Stats", "Differntials"],
        ["01-14-2023", "Team Name 1", "Lissandra", "2/4/1", "Overall Stats", "Differntials"],
        ["01-21-2023", "Team Name 1", "Azir", "3/3/7", "Overall Stats", "Differntials"]
      ],
      "Gumayushi": [
        ["01-02-2023", "Team Name 1", "Thresh", "1/1/10", "Overall Stats", "Differntials"],
        ["01-08-2023", "Team Name 1", "Jhin", "2/2/11", "Overall Stats", "Differntials"],
        ["01-14-2023", "Team Name 1", "Renata", "5/4/13", "Overall Stats", "Differntials"],
        ["01-21-2023", "Team Name 1", "Thresh", "2/4/5", "Overall Stats", "Differntials"]
      ],
      "Oner":[
        ["01-02-2023", "Team Name 1", "LeeSin", "6/1/3", "Overall Stats", "Differntials"],
        ["01-08-2023", "Team Name 1", "Viego", "1/2/4", "Overall Stats", "Differntials"],
        ["01-14-2023", "Team Name 1", "Wukong", "2/2/6", "Overall Stats", "Differntials"],
        ["01-21-2023", "Team Name 1", "Leesin", "1/3/5", "Overall Stats", "Differntials"]
      ],
      "Keria": [
        ["01-02-2023", "Team Name 1", "Caitlyn", "5/1/2", "Overall Stats", "Differntials"],
        ["01-08-2023", "Team Name 1", "Jinx", "1/3/4", "Overall Stats", "Differntials"],
        ["01-14-2023", "Team Name 1", "Varus", "12/4/1", "Overall Stats", "Differntials"],
        ["01-21-2023", "Team Name 1", "Zeri", "7/3/3", "Overall Stats", "Differntials"]
      ],
      "Zeus": [
        ["01-02-2023", "Team Name 1", "Gnar", "3/1/5", "Overall Stats", "Differntials"],
        ["01-08-2023", "Team Name 1", "Jayce", "6/2/4", "Overall Stats", "Differntials"],
        ["01-14-2023", "Team Name 1", "Jax", "4/4/3", "Overall Stats", "Differntials"],
        ["01-21-2023", "Team Name 1", "Camille", "3/1/1", "Overall Stats", "Differntials"]
      ]
    };
    setGameDataPlayer(fakeGameDataPlayer[props.player]);
  }, [props.player])

  return (
    <div>
      <u1>
        {gameDataPlayer.map((gameData, i) => {
          return (
            <div key={i}>
              <div>{gameData[0]}</div>
              <div>
                <Link href={`/team/${encodeURIComponent(gameData[1])}`}>{gameData[1] ?? "Loading"}</Link>
              </div>
              <div>{gameData[2]}</div>
              <div>{gameData[3]}</div>
              <div>{gameData[4]}</div>
              <div>{gameData[5]}</div>
            </div>
          )
        })}
      </u1>
    </div>
  )
}

export default GameDisplay;