import React from "react";

function Form({firstName,lastName,firstNameHandler,lastNameHandler}) {
  return (
    <form>
      <input type="text" value={firstName} onChange={firstNameHandler} />
      <input type="text" value={lastName}  onChange={lastNameHandler} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;