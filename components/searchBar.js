import {useState} from 'react';

function SearchBar() {
  const [searchType, setSearchType] = useState('Player');
  const [test1, setTest1] = useState('Initial');
  const fakeData = {deafcon9: 1, vNecks: 2, kappa: 3, Nono: 4};

  function findName() {
    console.log("ok");
    return "something is being done";
  }

  return (
    <div id="searchBar">
      <div id="searchTypeBtn">{searchType}</div>
      <ul className='searchBarDropContent'>
        <li onClick={() => setSearchType('Player')}>Player</li>
        <li onClick={() => setSearchType('Team')}>Team</li>
        <li onClick={() => setSearchType('Division')}>Division</li>
      </ul>
      <input type='text' placeholder='Search...'></input>
      <button onClick={()=> findName()}>Find</button>
    </div>
  )
}

export default SearchBar;