import {useEffect, useState} from 'react';

function GameLog(props) {
  const [gameLogData, setGameLogData] = useState([["loading"]]);

  useEffect(() => {
    setGameLogData(props.data);
  }, [props.data]);

  return (
      <u1 id="gameLog_AllEntry">
        {gameLogData.map((content, i) => {
          return (
              <u1 id="gameLog_singleEntry" key={i}>
                {content.map((seg, j) => {
                  return <div id="gameLog_singleData" key={j}>{seg}</div>
                })}
              </u1>
          )
        })}
      </u1>
  );
}

export default GameLog;