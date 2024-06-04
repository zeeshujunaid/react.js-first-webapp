import {useState, useEffect} from "react"
import { db } from "./database/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore";


function App() {
  var users = collection(db, "users")
  useEffect(()=>{
    getallusers()
    console.log("zeeshan");
  }, [])

  function addDatatofirebase() {
    var data = { name: "zeeshan", age: "20" }
    addDoc(users, data)

  }
  async function getallusers() {
    const querySnapshot = await getDocs(users);
    var list = []
    querySnapshot.forEach((doc) => {
      list.push(doc.data())
      console.log (doc.data());
    });
    console.log (list);
  }


  return (
    <div>
      <h1>hi this is my first code in react.js</h1>
      <button onClick={addDatatofirebase}>add data to firebase</button>
    </div>
  );
}

export default App;
