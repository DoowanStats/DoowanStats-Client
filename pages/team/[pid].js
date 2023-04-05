import {useRouter} from 'next/router';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import TeamDisplay from '../../components/teamPageComp/teamDisplay';
import GameDisplay from '../../components/teamPageComp/gameDisplay';

function TeamPage() {
  const router = useRouter();
  const {pid} = router.query;
  const [displayType, setDisplayType] = useState(0);
  const [name, setName] = useState("Loading");

  const handleDiplayChange = (e) => {
    e.preventDefault();
    setDisplayType(e.target.value);
  }

  useEffect(() => {
    setName(pid);
  }, [pid]);

  function DisplayContent() {
    if (displayType == 0) {
      return <TeamDisplay teamName={pid}/>
    } else if (displayType == 1) {
      return <GameDisplay teamName={pid}/>
    } else {
      return <div>C</div>
    }
  }

  return (
    <div id='teamPage'>
      <div id='topBar'>
        <div id='homeNav'><Link href='/'>Doowan.stats</Link></div>
      </div>
      <div>{pid}</div>
      <div>
        <button value={0} onClick={handleDiplayChange}>Team</button>
        <button value={1} onClick={handleDiplayChange}>Games</button>
        <button value={2} onClick={handleDiplayChange}>Stats</button>
      </div>
      <DisplayContent/>
    </div>
  )
}

export default TeamPage;