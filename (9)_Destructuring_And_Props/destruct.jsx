"use strict";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: {
      name: "Maradona",
      residence: {
        city: "Tigre",
        country: "Argentina",
      },
      profession: "soccer",
    },
  };

  render() {
    return <Details person={this.state} />;
  }
}

const Details = (props) => {
  // TODO: destructure props
  let name, city, country, profession
  ({person: {details: {name}}, person: {details: {residence: {city}}}, person: {details: {residence: {country}}}, person: {details: {profession}}} = props);

  return (
    <div style={{ margin: "1em" }}>
      <div id="name">Name: {name}</div>
      <div id="city">City: {city}</div>
      <div id="country">Country: {country}</div>
      <div id="profession">Profession: {profession}</div>
    </div>
  );
};

ReactDOM.render(React.createElement(Person), document.getElementById("root"));
