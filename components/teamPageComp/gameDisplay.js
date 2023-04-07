import {useState, useEffect} from 'react';
import GameLog from '../teamPageComp/gameLog';
import ScoutLog from '../teamPageComp/scoutLog';

function GameDisplay(props) {
  const [game, setGame] = useState(0);

  const fakeDataGameLog = [
    ["01/01/2023", "Team Name 2", "Team Stats", "Faker", "Gumayushi", "Oner", "Keria", "Zeus", "Bans Against Team"],
    ["02/01/2023", "Team Name 3", "Team Stats", "Faker", "Gumayushi", "Oner", "Keria", "Zeus", "Bans Against Team"],
    ["03/01/2023", "Team Name 4", "Team Stats", "Faker", "Gumayushi", "Oner", "Keria", "Zeus", "Bans Against Team"],
    ["04/01/2023", "Team Name 2", "Team Stats", "Faker", "Gumayushi", "Oner", "Keria", "Zeus", "Bans Against Team"]
  ];
  const fakeDataScouting = {
    "Bans Against": [
      ["Mid","Faker", "games", "KDA", "KP", "DMG", "Gold", "VS", "Champs Played"],
      ["Top","Zeus", "games", "KDA", "KP", "DMG", "Gold", "VS", "Champs Played"],
      ["JG","Oner", "games", "KDA", "KP", "DMG", "Gold", "VS", "Champs Played"],
      ["ADC","Keria", "games", "KDA", "KP", "DMG", "Gold", "VS", "Champs Played"],
      ["Sup","Gumayushi", "games", "KDA", "KP", "DMG", "Gold", "VS", "Champs Played"],
    ],
    "Bans By": ["Chogath", "Annie", "Tahm Kench", "Leblanc", "Jhin"]
  };

  const handleGameChange = (e) => {
    e.preventDefault();
    setGame(e.target.value);
  }

  function GameContent() {
    if (game == 0) {
      return <GameLog data={fakeDataGameLog} change={props.change}/>
    } else {
      return <ScoutLog data={fakeDataScouting}/>
    }
  }

  return (
    <div id="teamDisplay_gamePage">
      <div id="teamDisplay_gamePage_buttonLayout">
        <button id="gameLogButton" value={0} onClick={handleGameChange}>Game Log</button>
        <button id="scoutingButton" value={1} onClick={handleGameChange}>Scouting</button>
      </div>
      <GameContent/>
    </div>
  )
}

export default GameDisplay;