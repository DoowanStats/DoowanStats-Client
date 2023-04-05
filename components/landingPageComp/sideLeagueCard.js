import {useState, useEffect} from 'react';

function SideLeagueCard(props) {
  const [card, setCard] = useState({
    "icon": "loading",
    "name": "loading",
  });

  useEffect(() => {
    setCard({
      "icon": props.leagInfo[1],
      "name": props.leagInfo[0]
    });
  }, [props.leagInfo]);

  return (
    <div className="sideLeagueCard">
      <div id="sideLeagIcon">{card.icon}</div>
      <li id="sideLeagName">{card.name}</li>
    </div>
  )
}

export default SideLeagueCard;