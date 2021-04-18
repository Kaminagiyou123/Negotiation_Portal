import React from "react";

const Breakdown = ({ data }) => {
  const breakdownData = data?.map((item) => {
    const {
      Key_Negotiator,
      Anchor_Ask,
      Gap_to_Goal,
      Goal_to_Close,
      Win_Amount,
    } = item.fields;

    return {
      Key_Negotiator,
      Anchor_Ask,
      Gap_to_Goal,
      Goal_to_Close,
      Win_Amount,
    };
  });

  let negotiators = breakdownData?.reduce((total, item) => {
    const { Key_Negotiator, Gap_to_Goal, Goal_to_Close, Win_Amount } = item;
    if (!Key_Negotiator) {
      return total;
    }
    if (!total[Key_Negotiator]) {
      total[Key_Negotiator] = {
        label: Key_Negotiator,
        Goal_to_Close: parseFloat(Goal_to_Close),
        Win_Amount: parseFloat(Win_Amount),
        Gap_to_Goal: parseFloat(Gap_to_Goal),
        Percentage_Complete: parseFloat(Win_Amount / Goal_to_Close),
      };
    } else {
      total[Key_Negotiator] = {
        label: Key_Negotiator,
        Goal_to_Close:
          total[Key_Negotiator].Goal_to_Close + parseFloat(Goal_to_Close),
        Win_Amount: total[Key_Negotiator].Win_Amount + parseFloat(Win_Amount),
        Gap_to_Goal:
          total[Key_Negotiator].Gap_to_Goal + parseFloat(Gap_to_Goal),
        Percentage_Complete:
          (total[Key_Negotiator].Win_Amount + parseFloat(Win_Amount)) /
          (total[Key_Negotiator].Goal_to_Close + parseFloat(Goal_to_Close)),
      };
    }
    return total;
  }, {});

  return (
    <div>
      <table id='students'>
        <tbody>
          <tr id='header'>
            {/* <td>{"Account_Code"}</td> */}
            <td>{"Key_Negotiator"}</td>
            <td>{"Goal_to_Close"}</td>
            <td>{"Win_Amount"}</td>
            <td>{"Gap_to_Goal"}</td>
            <td>{"Percentage_Complete"}</td>
          </tr>

          {negotiators &&
            Object.values(negotiators).map((account) => {
              const {
                label,
                Goal_to_Close,

                Win_Amount,
                Gap_to_Goal,
                Percentage_Complete,
              } = account;
              return (
                <tr key={label}>
                  {/* <td>{Account_Code}</td> */}
                  <td>{label}</td>

                  <td>{Goal_to_Close}</td>

                  <td>{Win_Amount}</td>
                  <td>{Gap_to_Goal}</td>
                  <td>{(Percentage_Complete * 100).toFixed(2)}%</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Breakdown;
