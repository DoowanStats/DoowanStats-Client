import {useState, useEffect} from 'react';

function GameDisplay(props) {
  const [game, setGame] = useState(true);

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
    if (game) {
      return (
        <div>
          <u1>
            {fakeDataGameLog.map((content, i) => {
              return (
                <div key={i}>
                  <u1>
                    {content.map((seg, j) => {
                      return <div key={j}>{seg}</div>
                    })}
                  </u1>
                </div>
              )
            })}
          </u1>
        </div>
      );
    } else {
      return (
        <div>
          B
        </div>
      )
    }
  }

  return (
    <div>
      <div>
        <button value={true} onClick={handleGameChange}>Game Log</button>
        <button value={false} onClick={handleGameChange}>Scouting</button>
      </div>
      <GameContent/>
    </div>
  )
}

export default GameDisplay;