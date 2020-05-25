import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getKudos, getUsers } from "../../actions";

import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
  fontSize: "5px",
  fontFamily: "sans-serif",
};

const Stats = (props) => {
  useEffect(() => {
    props.getUsers();
    props.getKudos();
  });

  const buildGraphData = () => {};

  const shiftSize = 7;
  const lineWidth = 60;
  return (
    <div className="container">
      <h1>Estatísticas</h1>
      <PieChart
        radius={PieChart.defaultProps.radius - shiftSize}
        segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
        label={({ dataEntry }) => dataEntry.value}
        lineWidth={60}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        animate
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
          { title: "Four", value: 31, color: "#7A2535" },
        ]}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    kudos: state.kudosReducer.kudos,
    users: state.usersReducer.users,
  };
};

export default connect(mapStateToProps, { getKudos, getUsers })(Stats);
