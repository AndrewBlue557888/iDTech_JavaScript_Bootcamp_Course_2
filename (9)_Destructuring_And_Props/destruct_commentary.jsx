"use strict";
// this is a copy of destruct.jsx, said original is how it was read/submitted since apparently adding comments/adding lines causes the workspace to fail 
// note to self: DO NOT EDIT THE ORIGINAL
class Person extends React.Component {
  constructor(props) {
    super(props);
  }
// I added the instructed, yet missing, values to the object [strings in quotes], everything else in object is pre-made
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
  // TODO: destructure props (line below is my code)
  let name, city, country, profession
    // "person" is used on what are now lines 4 and 21 (line below is my code)
  ({person: {details: {name}}, person: {details: {residence: {city}}}, person: {details: {residence: {country}}}, person: {details: {profession}}} = props);

// changed {props.person.details.residence.country} to {country}, same for the other lines [34-37], rest of each line is pre-made
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
