import React from "react";
import { Link } from "react-router-dom";
import PieChart from "./PieChart";
import Breakdown from "./Breakdown";
const Analysis = ({ data }) => {
  let anchor = 0;
  let gap = 0;
  let goal = 0;
  let stretch = 0;
  let win = 0;
  let planC = 0;
  let askC = 0;
  let progressC = 0;
  let partialC = 0;
  let CC = 0;
  let newData = data && [...data];
  newData?.map((item) => {
    const {
      Anchor_Ask,
      Gap_to_Goal,
      Goal_to_Close,
      Stretch_Goal,
      Win_Amount,
      Negotiation_Phase,
    } = item.fields;
    anchor += Anchor_Ask;
    goal += Goal_to_Close;
    gap += Gap_to_Goal;
    stretch += Stretch_Goal;
    win += Win_Amount;
    switch (Negotiation_Phase) {
      case "Plan":
        planC += 1;
        break;
      case "Inital Ask Sent":
        askC += 1;
        break;
      case "Negotiation in Progress":
        progressC += 1;
        break;
      case "Partially Closed":
        partialC += 1;
        break;
      case "Closed":
        CC += 1;
        break;
    }
  });

  const negotationData = [
    { label: "Plan", value: planC },
    { label: "Inital Ask Sent", value: askC },
    { label: "Negotiation in Progress", value: progressC },
    { label: "Partially Closed", value: partialC },
    { label: "Closed", value: CC },
  ];

  return (
    <div>
      <div className='analysis'>
        <table id='students'>
          <tbody>
            <tr id='header'>
              {/* <td>{"Account_Code"}</td> */}
              <td>{"Goal_to_Close"}</td>
              <td>{"Stretch_Goal"}</td>
              <td>{"Anchor_Ask"}</td>
              <td>{"Win_Amount"}</td>
              <td>{"Gap_to_Goal"}</td>
              <td>{"%Achieved"}</td>
            </tr>
            <tr>
              <td>${goal}</td>
              <td>${stretch}</td>
              <td>${anchor}</td>
              <td>${win}</td>
              <td>${gap}</td>
              <td>{((win / goal) * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='analysis-container'>
        <div className='pie-chart'>
          <PieChart data={negotationData} />
        </div>
        <div className='single-performance'>
          <Breakdown data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
