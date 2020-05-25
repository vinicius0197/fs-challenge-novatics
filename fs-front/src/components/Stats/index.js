import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getKudos, getUsers } from "../../actions";

import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
  fontSize: "3px",
  fontFamily: "sans-serif",
  fill: "#fff",
};

// Displays a simple PieChart graph
const Stats = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const buildGraphData = () => {
    let graphData = [];
    props.users.map((user) => {
      if (user.received_kudos.length > 0) {
        graphData.push({
          title: user.received_kudos.length,
          value: user.received_kudos.length,
          name: user.username,
          color: getRandomColor(),
        });
      }
    });

    return graphData;
  };

  const shiftSize = 7;
  const lineWidth = 60;
  return (
    <div className="container">
      <h1 className="title">Estatísticas</h1>
      <div>
        <p>
          Passe o mouse por cima das fatias do gráfico para ver a quantidade de
          kudos de cada participante
        </p>
      </div>
      <PieChart
        radius={PieChart.defaultProps.radius - shiftSize}
        segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
        label={({ dataEntry }) => dataEntry.name}
        lineWidth={60}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        animate
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        data={buildGraphData()}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};

export default connect(mapStateToProps, { getKudos, getUsers })(Stats);
