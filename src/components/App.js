import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(resp => resp.json())
      .then(data => {
        setToys(data);
        console.log(data)
      })
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleToyAdd(newToy) {
    const newToyArray = [...toys, newToy];
    setToys(() => newToyArray)
  }

  function handleToyDonate(donatedToy) {
    const newToyArray = toys.filter(toy => toy.id !== donatedToy.id);
    setToys(() => newToyArray)
  }

  function handleToylike(likedToy){
    const newToyArray = toys.map(toy => {
      if(toy.id === likedToy.id){
        return likedToy
      }
      return toy
    })
    setToys(()=> newToyArray)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onToyAdd={handleToyAdd} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onToyDonate={handleToyDonate} onToyLike={handleToylike} />
    </>
  );
}

export default App;
