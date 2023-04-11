import {useRouter} from 'next/router';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import TournamentDisplay from '../../components/leaguePageComp/tournamentDisplay';
import TeamsDisplay from '../../components/leaguePageComp/teamsDisplay';

function LeaguePage() {
  const router = useRouter();
  const {pid} = router.query;
  const [displayType, setDisplayType] = useState(0);
  const [league, setLeague] = useState("Loading");

  function DisplayContent() {
    if (displayType == 0) {
      return <TournamentDisplay leagueName={pid}/>
    } else if (displayType == 1) {
      return <TeamsDisplay leagueName={pid}/>
    } else if (displayType == 2){
      return <div>C</div>
    } else {
      return <div>D</div>
    }
  }

  useEffect(() => {
    setLeague(pid);
  }, [pid]);

  const handleDisplayChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setDisplayType(e.target.value ?? 0);
  }

  return (
    <div>
      <div id='topBar'>
        <div id='homeNav'><Link href='/'>Doowan.stats</Link></div>
        <div>Regular Season</div>
        <div>Playoffs</div>
      </div>
      <div>
        <div>{league}</div>
        <div>
          <button value={0} onClick={handleDisplayChange}>Tournament</button>
          <button value={1} onClick={handleDisplayChange}>Teams</button>
          <button value={2} onClick={handleDisplayChange}>Champs</button>
          <button value={3} onClick={handleDisplayChange}>Games</button>
        </div>
        <DisplayContent/>
      </div>
    </div>
  )
}

export default LeaguePage;