import {useState, useEffect} from 'react';
import SideLeagueCard from './sideLeagueCard';

function DisplaySeasons() {
  const fakeDataSeason = {
    "Winter 22": [["Vanguard", "icon 1"], ["Defenders", "icon 2"], ["Protectors", "icon 3"], ["Gaurdians", "icon 4"]],
    "Summer 21": [["Vanguard", "icon 5"], ["Defenders", "icon 6"], ["Protectors", "icon 7"], ["Gaurdians", "icon 8"]],
    "Winter 21": [["Vanguard", "icon 9"], ["Defenders", "icon 10"], ["Protectors", "icon 11"], ["Gaurdians", "icon 12"]],
    "Summer 20": [["Vanguard", "icon 13"], ["Defenders", "icon 14"], ["Protectors", "icon 15"], ["Gaurdians", "icon 16"]]
  }
  const seasons = ["Winter 22", "Summer 21", "Winter 21", "Summer 20"];
  const [chosenSeason, setChosenSeason] = useState({
    "Season": "Winter 22",
    "League": [["Vanguard", "icon 1"], ["Defenders", "icon 2"], ["Protectors", "icon 3"], ["Gaurdians", "icon 4"]]
  });

  function onClickSeasonHandler(season) {
    setChosenSeason({
      "Season": season,
      "League": fakeDataSeason[season]
    });
  }

  return (
    <div id='sideBarDisplaySeasons'>
      <div id="seasonContent">
        <div id="currentSeasonChosen">
          <div id='seasonChosen'>{chosenSeason.Season}</div>
          <ul className='seasonDropdownContent'>
            {seasons.map((season, i) => {
              return <li key={i} onClick={() => onClickSeasonHandler(season)}>{season}</li>
            })}
          </ul>
        </div>
        <div id="currentSeasonLeagInfo">
            {chosenSeason.League.map((leag, i) => {
              return <SideLeagueCard key={i} leagInfo={leag}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default DisplaySeasons;