import React,{useState} from "react";
import Form from "./Form";
import DisplayData from "./FormData";

const ParentComponent = () => {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
  
    const handleFirstNameChange = (e)=>{
        console.log(e.target.value);
      setFirstName(e.target.value);
    }
  
    const handleLastNameChange = (e)=>{
        console.log(e.target.value);
      setLastName(e.target.value);
    }

    return ( 
        <div className="container">
             <Form firstName={firstName} lastName={lastName} firstNameHandler={handleFirstNameChange}  lastNameHandler={handleLastNameChange}/>
             <DisplayData firstName={firstName} lastName={lastName} />
        </div>
     );
}
 
export default ParentComponent;