import {useState, useEffect} from 'react';

function TeamDisplay(props) {
  const [name, setName] = useState(["Loading", "Loading", "Loading", "Loading"]);

  useEffect(() => {
    const fakeData = {
      "Team Name 1": ["Faker", "Gumayushi", "Oner", "Keria", "Zeus"],
      "Team Name 2": ["Blaber", "Berserker", "Zeysal", "Fudge", "Zven"],
      "Team Name 3": ["Elyoya", "Nisqy", "Chasy", "Hylissang", "Carzzy"],
      "Team Name 4": ["Kanavi", "369", "Missing", "knight", "Ruler"],
      "Loading": ["Loading", "Loading", "Loading", "Loading"]
    };
    setName(fakeData[props.teamName]);
  }, [props.teamName]);

  return (
    <div>
      <ul>
        {name.map((playerName, i) => {
          return <div key={i}>{playerName}</div>
        })}
      </ul>
    </div>
  )
}

export default TeamDisplay;