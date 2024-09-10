import { useState } from "react";
import "./App.css";

function App() {
  const [isEdited, setIsEdited] = useState(false);

  let nameField = <span>Name</span>;

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
