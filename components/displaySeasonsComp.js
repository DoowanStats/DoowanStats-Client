import {useState, useEffect} from 'react';

function DisplaySeasons() {
  const fakeDataSeason = {
    "Winter 22": {"Vanguard": "icon 1", "Defenders": "icon 2", "Protectors": "icon 3", "Gaurdians": "icon 4"},
    "Summer 21": {"Vanguard": "icon 5", "Defenders": "icon 6", "Protectors": "icon 7", "Gaurdians": "icon 8"},
    "Winter 21": {"Vanguard": "icon 9", "Defenders": "icon 10", "Protectors": "icon 11", "Gaurdians": "icon 12"},
    "Summer 20": {"Vanguard": "icon 13", "Defenders": "icon 14", "Protectors": "icon 15", "Gaurdians": "icon 16"}
  }
  const seasons = ["Winter 22", "Summer 21", "Winter 21", "Summer 20"];
  const [chosenSeason, setChosenSeason] = useState("Winter 22");
  const [chosenLeag, setChosenLeag] = useState(["Vanguard", "Defenders", "Protectors", "Gaurdians"]);

  function onClickSeasonHandler(season) {
    setChosenSeason(season).then(() => {
      const seasonLeags = fakeDataSeason[season];
      const leagNames = [];
      for (const key of seasonLeags) {
        leagNames.push(key);
      }
      setChosenLeag(leagNames);
    })
    .catch((err) => {
      alert(err.message);
    });
  }

  return (
    <div id='sideBarDisplaySeasons'>
      <div id='season'>{chosenSeason}</div>
      <div>{chosenLeag["Vanguard"]}</div>
      <ul className='seasonDropdownContent'>
        {seasons.map((season, i) => {
          return <li key={i} onClick={() => onClickSeasonHandler(season)}>{season}</li>
        })}
      </ul>
    </div>
  )
}

export default DisplaySeasons;