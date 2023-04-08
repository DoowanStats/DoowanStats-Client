import {useRouter} from 'next/router';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import PlayerDisplay from '../../components/playerPageComp/playerDisplay';
import GameDisplay from '../../components/playerPageComp/gameDisplay';

function PlayerPage() {
  const router = useRouter();
  const {pid} = router.query;
  const [displayType, setDisplayType] = useState(0);
  const [name, setName] = useState("Loading");

  const handleDiplayChange = (e) => {
    e.preventDefault();
    setDisplayType(e.target.value ?? 0);
  }

  useEffect(() => {
    setName(pid);
  }, [pid]);

  function DisplayContent() {
    if (displayType == 0) {
      return <PlayerDisplay player={pid}/>
    } else if (displayType == 1) {
      return <GameDisplay player={pid}/>
    } else {
      return <div>C</div>
    }
  }

  return (
    <div id='playerPage'>
      <div id='topBar'>
        <div id='homeNav'><Link href='/'>Doowan.stats</Link></div>
      </div>
      <div id="playerPage_playerName">{pid}</div>
      <div id="playerPage_buttonLayout">
        <button id="playerButton" value={0} onClick={handleDiplayChange}>Player</button>
        <button id="playerGamesamesButton" value={1} onClick={handleDiplayChange}>Games</button>
        <button id="playerStatsButton" value={2} onClick={handleDiplayChange}>Stats</button>
      </div>
      <DisplayContent/>
    </div>
  )
}

export default PlayerPage;