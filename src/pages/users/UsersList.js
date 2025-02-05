import React from "react"; 
import { Link } from "react-router-dom";      
import UsersListTable from "../../components/Users/UsersListTable";
import { Padding } from "@mui/icons-material";

const UsersList = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Lista Utenti</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <i className="material-symbols-outlined">home</i>
              Home
            </Link>
          </li>
          <li >
            <Link style={{padding: "0px"}} to="/users">
              Users
            </Link>  
          </li> 
          <li>Riepilogo</li>
        </ul>
      </div>

      <UsersListTable /> 
    </>
  );
};

export default UsersList;
