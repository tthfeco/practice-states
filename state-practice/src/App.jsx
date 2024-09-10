import { useState } from "react";
import "./App.css";

function App() {
  const [isEdited, setIsEdited] = useState(false);

  let nameField = <span>Name</span>;

  if (isEdited) {
    nameField = <input type="text" required />
  }

  return (
    <>
      <div>
        <h3>Registration</h3>
        <div>
          {nameField}
          <button onClick={() => setIsEdited(true)}>{isEdited ? 'Save' : 'Edit'}</button>
        </div>
      </div>
    </>
  );
}

export default App;
