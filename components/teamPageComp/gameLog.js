import {useEffect, useState} from 'react';
import Link from 'next/link';

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
                <div id="gameLog_singleData">{content[0]}</div>
                <div id="gameLog_singleData" onClick={props.change}>
                  <Link href={`/team/${encodeURIComponent(content[1])}`}>{content[1] ?? "Loading"}</Link>
                </div>
                <div id="gameLog_singleData">{content[2]}</div>
                <div id="gameLog_singleData">
                  <Link href={`/player/${encodeURIComponent(content[3])}`}>{content[3] ?? "loading"}</Link>
                </div>
                <div id="gameLog_singleData">
                  <Link href={`/player/${encodeURIComponent(content[4])}`}>{content[4] ?? "loading"}</Link>
                </div>
                <div id="gameLog_singleData">
                  <Link href={`/player/${encodeURIComponent(content[5])}`}>{content[5] ?? "loading"}</Link>
                </div>
                <div id="gameLog_singleData">
                  <Link href={`/player/${encodeURIComponent(content[6])}`}>{content[6] ?? "loading"}</Link>
                </div>
                <div id="gameLog_singleData">
                  <Link href={`/player/${encodeURIComponent(content[7])}`}>{content[7] ?? "loading"}</Link>
                </div>
                <div id="gameLog_singleData">{content[8]}</div>
              </u1>
          )
        })}
      </u1>
  );
}

export default GameLog;