import React from "react"; 
import { Link } from "react-router-dom";
import AddUserForm from "../../components/Users/AddUserForm";

const AddUsers = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Add Users</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <i className="material-symbols-outlined">home</i>
              Home
            </Link>
          </li>
          <li>
            <Link style={{padding: "0px"}} to="/users">
              Users
            </Link>  
          </li> 
          <li>Aggiungi Utente</li>
        </ul>
      </div>

      <AddUserForm />
    </>
  );
};

export default AddUsers;
