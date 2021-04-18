import React from "react";

import { destroyData } from "./useData";
import Account from "./Account";

const Home = ({ item, setItem, search, data }) => {
  const filterData = (data) => {
    if (data) {
      let newData = [...data];
      if (search.account) {
        newData = newData.filter((i) =>
          i.fields.Account_Name.startsWith(search.account)
        );
      }
      if (search.negotiator) {
        newData = newData.filter(
          (i) => i.fields.Key_Negotiator === search.negotiator
        );
      }

      return newData;
    }
  };

  const pullItem = (n) => {
    const s = data?.filter((account) => account.id === n);
    const { id, fields } = s[0];
    const {
      Account_Name,
      Account_Code,
      Key_Negotiator,
      Manager,
      Goal_to_Close,
      Stretch_Goal,
      Negotiation_Phase,
      Anchor_Ask,
      Win_Amount,
      Gap_to_Goal,
      Negotiator_Comments,
    } = fields;
    setItem({
      id,
      Account_Name,
      Account_Code,
      Key_Negotiator,
      Manager,
      Goal_to_Close,
      Stretch_Goal,
      Negotiation_Phase,
      Anchor_Ask,
      Win_Amount,
      Gap_to_Goal,
      Negotiator_Comments,
    });
  };

  return (
    <div>
      <table id='students'>
        <tbody>
          <tr id='header'>
            {/* <td>{"Account_Code"}</td> */}
            <td>{"Account_Name"}</td>
            <td>{"Key_Negotiator"}</td>
            <td>{"Manager"}</td>
            <td>{"Goal_to_Close"}</td>
            <td>{"Stretch_Goal"}</td>
            <td>{"Negotiation_Phase"}</td>
            <td>{"Anchor_Ask"}</td>
            <td>{"Win_Amount"}</td>
            <td>{"Gap_to_Goal"}</td>
            <td>{"Negotiator_Comments"}</td>
            <td>{"Actions_Needed"}</td>
          </tr>

          {data &&
            filterData(data).map((account) => {
              const { id, fields } = account;
              const {
                Account_Name,
                // Account_Code,
                Key_Negotiator,
                Manager,
                Goal_to_Close,
                Stretch_Goal,
                Negotiation_Phase,
                Anchor_Ask,
                Win_Amount,
                Gap_to_Goal,
                Negotiator_Comments,
              } = fields;
              return (
                <tr key={id}>
                  {/* <td>{Account_Code}</td> */}
                  <td>{Account_Name}</td>
                  <td>{Key_Negotiator}</td>
                  <td>{Manager}</td>
                  <td>{Goal_to_Close}</td>
                  <td>{Stretch_Goal}</td>
                  <td>{Negotiation_Phase}</td>
                  <td>{Anchor_Ask}</td>
                  <td>{Win_Amount}</td>
                  <td>{Gap_to_Goal}</td>
                  <td>{Negotiator_Comments}</td>
                  <td className='btn-container'>
                    <button
                      className='btn'
                      onClick={(e) => {
                        e.preventDefault();
                        pullItem(id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className='btn'
                      onClick={(e) => {
                        e.preventDefault();
                        destroyData(id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
        <Account item={item} setItem={setItem} />
      </div>
    </div>
  );
};
export default Home;
