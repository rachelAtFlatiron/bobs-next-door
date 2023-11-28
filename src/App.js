import { useState, useEffect } from 'react'
import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {
  const url = 'http://localhost:8085/stores'
  //try to always use data type that is to be expected
  const [stores, setStores] = useState([]) 
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadData()
  }, []) 
  //open bracket signifies to run ONCE and only ONCE on component mount

  const loadData = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setStores(data))
  }

  //not best practice to pass down setStates, use a wrapper function
  const addStore = (store) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        ...store, 
        episode: parseInt(store.episode),
        season: parseInt(store.season)
      })
    })
    .then(res => res.json())
    //ALWAYS add new data directly from server to state 
    //it will contain additional things such as the ID
    .then(data => setStores([...stores, data]))
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      {/* passing down search state to make input value controlled */}
      <Search updateSearch={updateSearch} search={search} />
      <NewStoreForm addStore={addStore} />
      <StoreList stores={stores} search={search}/>
    </div>
  );
}

export default App;
