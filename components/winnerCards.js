import {useEffect, useState} from 'react';

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
      <li id="winnerCardsTeamName">{card.name}</li>
    </div>
  )
}

export default WinnerCards;