import {useEffect, useState} from 'react';
import Link from 'next/link';

function WinnerCards(props) {
  const [card, setCard] = useState({
    "name": "loading",
    "icon": ["loading"],
    "league": "loading",
  });

  useEffect(() => {
    setCard({
      "name": props.cardInfo[1],
      "icon": props.cardInfo[2],
      "league": props.cardInfo[0]
    })
  }, [props.cardInfo])

  return (
    <div id="winnerCard">
      <ul className="iconDisplays">
        {card.icon.map((iconImg, i) => {
          return <div key={i}>{iconImg}</div>
        })}
      </ul>
      <li id="winnerCardsLeagName">{card.league}</li>
      <li id="winnerCardsTeamName">
        <Link href={`/team/${encodeURIComponent(card.name)}`}>{card.name}</Link>
      </li>
    </div>
  )
}

export default WinnerCards;