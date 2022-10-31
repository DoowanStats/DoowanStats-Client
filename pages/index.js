// domainName.com/
import Link from 'next/link';
import {Fragment} from 'react';
import SearchBar from '../components/searchBar';
import DisplaySeasonsComp from '../components/displaySeasonsComp';
import DisplayCurrentSeasonInfo from '../components/displayCurrentSeasonInfo';

function LandingPage() {
  return (
    <div id='landingPage'>
      <div id='topBar'>
        <div id='homeNav'><Link href='/'>Doowan.stats</Link></div>
      </div>
      <SearchBar/>
      <div id='mainContentLP'>
        <DisplayCurrentSeasonInfo/>
        <DisplaySeasonsComp/>
      </div>
      <div>Doowan Stats is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</div>
    </div>
  );
}

export default LandingPage;