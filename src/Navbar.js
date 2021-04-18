import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPlusSquare,
  faChartLine,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
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
      <div>
        <button
          className='add-icon'
          onClick={(e) => {
            e.preventDefault();
            setItem({ ...item, Account_Name: "New" });
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} size='2x' color={"darkcyan"} />
        </button>
        <Link to='/analysis' className='add-icon'>
          <FontAwesomeIcon icon={faChartLine} size='2x' color={"darkcyan"} />
        </Link>
        <Link to='/login' className='add-icon'>
          <FontAwesomeIcon icon={faSignOutAlt} size='2x' color={"darkcyan"} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
