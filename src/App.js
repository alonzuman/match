import React, { useEffect } from 'react';
import { db, auth } from './firebase'

function App() {
  const test = async () => {
    const snapshot = await db.collection('users').add({ hi: 'bye' }).get()
    console.log(snapshot.id)
    console.log(snapshot.data())
  }

  useEffect(() => { test() }, [])

  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
