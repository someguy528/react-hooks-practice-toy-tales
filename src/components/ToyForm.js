import React, {useState} from "react";

function ToyForm({onToyAdd}) {

  const [form, setForm] = useState ({
    name: "",
    image: "",
    likes: 0
  })

  function handleFormChange(event){
    const name = event.target.name;
    let value = event.target.value;
    if(name === "likes") {
      value = parseFloat(value)
    }
    setForm({
        ...form, 
        [name] : value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(form) 
    })
    .then(resp=>resp.json())
    .then(()=>{
      onToyAdd(form)
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={handleFormChange}

        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;
