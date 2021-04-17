import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
const Navbar = ({ item, setItem, setSearch }) => {
  return (
    <div className='navbar'>
      <div className='search-container'>
        <input placeholder='Account Name'></input>
        <input placeholder='Key Negotiator'></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            let account =
              e.target.previousElementSibling.previousElementSibling.value;
            let negotiator = e.target.previousElementSibling.value;

            setSearch({ account, negotiator });
          }}
        >
          Search
        </button>
      </div>

      <h3>Negotiation Status Team ABC</h3>
      <button
        className='add-icon'
        onClick={(e) => {
          e.preventDefault();
          setItem({ ...item, Account_Name: "New" });
        }}
      >
        <FontAwesomeIcon icon={faPlusSquare} size='2x' color={"darkcyan"} />
      </button>
    </div>
  );
};

export default Navbar;
