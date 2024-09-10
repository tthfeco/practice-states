import { useState } from "react";
import "./App.css";

function App() {
  const [isEdited, setIsEdited] = useState(false);
  const [name, setName] = useState("Name");

  let nameField = <span>{name}</span>;

  if (isEdited) {
    nameField = <input type='text' value={name} onChange={(e) => setName(e.target.value)} />;
  }

  function handleButtonClick() {
    if (isEdited) {
      setIsEdited(false);
    } else {
      setIsEdited(true);
    }
  }

  return (
    <>
      <div>
        <h3>Registration</h3>
        <div>
          {nameField}
          <button onClick={handleButtonClick}>
            {isEdited ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
