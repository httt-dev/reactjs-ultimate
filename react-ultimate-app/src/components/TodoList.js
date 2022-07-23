import React, { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("name");

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <br></br>
      Xin chao den voi reactjs . Name input : {name}
    </div>
  );
};

export default TodoList;
