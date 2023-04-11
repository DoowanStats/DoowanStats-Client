import {useState, useEffect} from 'react';
import Link from 'next/link';

function TeamsDisplay(props) {
  const [currLeague, setCurrLeague] = useState(['Loading', 'Loading', 'Loading']);

  const fakeWinsData = {
    "Team Name 1": "20-0",
    'Team Name 2': "11-9",
    'Team Name 3': "0-20",
    'Team Name 4': "5-15",
    'Team Name 5': "13-7",
    'Team Name 6': "19-1",
    'Team Name 7': "7-13",
    'Team Name 8': "3=17",
    'Loading': 'Loading'
  }

  useEffect(() => {
    const fakeData = {
      'Vanguard': ['Team Name 1', 'Team Name 2', 'Team Name 3', 'Team Name 4', 'Team Name 5', 'Team Name 6', 'Team Name 7', 'Team Name 8'],
      'Defenders': ['Team Name 1', 'Team Name 2', 'Team Name 3', 'Team Name 4', 'Team Name 5', 'Team Name 6', 'Team Name 7', 'Team Name 8'],
      'Protectors': ['Team Name 1', 'Team Name 2', 'Team Name 3', 'Team Name 4', 'Team Name 5', 'Team Name 6', 'Team Name 7', 'Team Name 8'],
      'Gaurdians': ['Team Name 1', 'Team Name 2', 'Team Name 3', 'Team Name 4', 'Team Name 5', 'Team Name 6', 'Team Name 7', 'Team Name 8']
    };
    setCurrLeague(fakeData[props.leagueName]);
  }, [props.leagueName])

  return (
    <u1>
      {currLeague.map((teamName, i) => {
        return (
          <div key={i}>
            <div><Link href={`/team/${encodeURIComponent(teamName)}`}>{teamName}</Link></div>
            <div>wins</div>
            <div>{fakeWinsData[teamName]}</div>
          </div>
        )
      })}
    </u1>
  )
}

export default TeamsDisplay;