import React from "react"; 
import { Link } from "react-router-dom";     
import TeamMembers from "../../components/Users/TeamMembers";

const Users = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Gruppo Utenti</h5>

        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <i className="material-symbols-outlined">home</i>
              Home
            </Link>
          </li>
          <li>Users</li> 
        </ul>
      </div>

      <TeamMembers />
    </>
  );
};

export default Users;
