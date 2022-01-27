import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
    const getMyNfts = async () =>{
      const openseaData = await axios.get('https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_address=0x536A5D3e7a8603fCd53Beac71a8C6A3081c0dD51&order_direction=asc')
      //testing data out to see if i have the right destination
      //New address
      // https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_address

      //OLD ADDRESS
      //https://testnets-api.opensea.io/assets?asset_contract_address
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts();
    }, [])

  return (
    <div className= 'app'>
      <Header />
      {
      punkListData.length > 0 && (
        <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <Punklist punkListData ={punkListData} 
      setSelectedPunk={setSelectedPunk} 
      />
      </>
        )}
    </div>
  )
}

export default App;
