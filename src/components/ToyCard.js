import React from "react";

function ToyCard({ toy, onToyDonate, onToyLike }) {
  const { id, name, image, likes } = toy;

  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(onToyDonate(toy))
  };

  function handleLikeClick() {
    // const parsedLikes = parseFloat(toy.likes + 1)
    const newToyLikes = { 
      likes: toy.likes + 1
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToyLikes),
    })
      .then(resp => resp.json())
      .then(onToyLike)
  };



  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
