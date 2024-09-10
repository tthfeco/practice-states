import { useState } from "react";

export default function User() {
  const [isEdited, setIsEdited] = useState(false);
  const [name, setName] = useState("Name");

  let nameField = <span>{name}</span>;

  if (isEdited) {
    nameField = (
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    );
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
      {nameField}
      <button onClick={handleButtonClick}>{isEdited ? "Save" : "Edit"}</button>
    </>
  );
}
