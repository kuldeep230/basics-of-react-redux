import React from "react";
import { connect } from "react-redux";
import { buyCandy } from "../redux/candy/candyActions";

function CandyContainer(props) {
  return (
    <div>
      <h2>Number of Candies - {props.numOfCandies}</h2>
      <button onClick={props.buyCandy}>Buy Candy</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCandies: state.candy.numOfCandies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCandy: () => dispatch(buyCandy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer);
