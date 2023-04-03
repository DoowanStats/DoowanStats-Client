import {Fragment, useState} from 'react';
import WinnerCards from './winnerCards';

function DisplayCurrentSeasonInfo() {
  const fakeData = [
    ["Vanguard", "Team Name 1", ["icon1", "icon2", "icon3"]],
    ["Defenders", "Team Name 2", ["icon4"]],
    ["Protectors", "Team Name 3", ["icon5"]],
    ["Guardians", "Team Name 4", ["icon6"]]
  ];

  return (
    <div id="currentSeasonDisplay">
      <div id="congratsMsg">Congraulations to the Winter 22 Season Teams</div>
      <ul className="displayWinnerCards">
        {fakeData.map((info, i) => {
          return <WinnerCards key={i} cardInfo={info}/>
        })}
      </ul>
    </div>
  )
}

export default DisplayCurrentSeasonInfo;
