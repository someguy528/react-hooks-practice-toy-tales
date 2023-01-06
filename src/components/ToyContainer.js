import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDonate, onToyLike}) {

  const allDisplayedToys = toys.map(toy => {
    return(  <ToyCard key={toy.id} toy={toy} onToyDonate={onToyDonate} onToyLike={onToyLike} />)
  })

  return (
    <div id="toy-collection">{allDisplayedToys}</div>
  );
}

export default ToyContainer;
