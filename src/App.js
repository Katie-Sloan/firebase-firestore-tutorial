import React from 'react';
import './App.css';
import firebase from './firebase'; 
import {BandInput} from './BandInput'

function App() {
  var [Bands, setBands] = React.useState([])
  var [newBandName, setNewBandName] = React.useState()

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("Bands").get()
      console.log(data)
      setBands(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    fetchData()
  }, [])
  
  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('Bands').add({Name: newBandName})
  }

  return (
    <>
    <h1>Bands</h1>
    <ul>
      <input value={newBandName} onChange={(e) => setNewBandName(e.target.value)}/>
      <button onClick={onCreate}>Create</button>
      {Bands.map(band => (
        <li key={band.Name}>
          <BandInput band={band}/>{band.Name}
        </li>
      ))}
    </ul> 
    </>
  );
}

export default App;
