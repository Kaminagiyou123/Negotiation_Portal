import React, { useState } from "react";
import { updateData } from "./useData";
const Account = ({ item, setItem }) => {
  const {
    Account_Name,
    Negotiation_Phase,
    Key_Negotiator,
    Goal_to_Close,
    Anchor_Ask,
    Win_Amount,
    Negotiator_Comments,
  } = item;

  return (
    <div
      className={`account-block ${Account_Name === "" && "account-block-hide"}`}
    >
      <h3>Account Information</h3>
      <form className='account-form'>
        <label for='Account_Name'>Account_Name</label>
        <h4>{Account_Name}</h4>
        <label for='Key_Negotiator'>Key_Negotiator</label>
        <input
          name='Key_Negotiator'
          value={Key_Negotiator}
          onChange={(e) => {
            setItem({ ...item, Key_Negotiator: e.target.value });
          }}
        ></input>
        <label>Negotiation_Phase</label>
        <select
          name='Negotiation_Phase'
          onChange={(e) => {
            setItem({ ...item, Negotiation_Phase: e.target.value });
          }}
        >
          <option>Plan</option>
          <option>Inital Ask Sent</option>
          <option>Negotiation in Progress</option>
          <option>Partially Closed</option>
          <option>Closed</option>
        </select>
        <label for='Goal_to_Close'>Goal_to_Close</label>
        <input
          name='Goal_to_Close'
          value={parseFloat(Goal_to_Close)}
          onChange={(e) => {
            setItem({ ...item, Goal_to_Close: parseFloat(e.target.value) });
          }}
        ></input>
        <label for='Anchor_Ask'>Anchor_Ask</label>
        <input
          name='Anchor_Ask'
          value={parseFloat(Anchor_Ask)}
          onChange={(e) => {
            setItem({ ...item, Anchor_Ask: parseFloat(e.target.value) });
          }}
        />
        <label for='Win_Amount' type='number'>
          Win_Amount
        </label>
        <input
          name='Win_Amount'
          value={parseFloat(Win_Amount)}
          onChange={(e) => {
            setItem({ ...item, Win_Amount: parseFloat(e.target.value) });
          }}
        />
        <label for='Negotiator_Comments'>Negotiator_Comments</label>
        <textarea
          rows='5'
          name='Negotiator_Comments'
          value={Negotiator_Comments}
          onChange={(e) => {
            setItem({ ...item, Negotiator_Comments: e.target.value });
          }}
        />
        <button
          className='btn'
          onClick={(e) => {
            e.preventDefault();
            console.log(item);
            updateData(
              item.id,
              (item = {
                Account_Name,
                Key_Negotiator,
                Goal_to_Close,
                Anchor_Ask,
                Win_Amount,
                Negotiator_Comments,
                Negotiation_Phase,
              })
            );

            setItem({
              Account_Name: "",
              Account_Code: "",
              Key_Negotiator: "",
              Manager: "",
              Goal_to_Close: 0,
              Stretch_Goal: 0,
              Negotiation_Phase: "",
              Anchor_Ask: 0,
              Win_Amount: 0,
              Gap_to_Goal: 0,
              Negotiator_Comments: "",
              Negotiation_Phase: "",
            });
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Account;
