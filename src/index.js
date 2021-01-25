import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { id: 1,
          time: "10:00", 
          title: "Breakfast with Simon", 
          location: "Lounge Caffe", 
          description: "Discuss Q3 targets"
        },

        { id: 2,
          time: "10:30", 
          title: "Daily Standup Meeting (recurring)",
          location: "Warsaw Spire Office", 
          description: ""
        },

        { id: 3,
          time: "11:00", 
          title: "Call with HRs",
        },

        {
          id: 4, 
          time: "11:00",
          title: "Lunch with Timothy",
          location: "Canteen",
          description: "Project evaluation ile declaring a variable and using an if statement is a fine way to conditionnally render a component, sometimes you might to use a"
        }
      ]
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="9">
              {this.state.events.map( event => (
                <Event 
                  key={event.id}
                  id={event.id}
                  time={event.time}
                  title={event.title}
                  location={event.location}
                  description={event.description}
                />
            ))}
            </MDBCol>
            <MDBCol lg="3"/>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

class Event extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.time} - {this.props.title}</h3>
        <h6>Location: {this.props.location}</h6>
        <p>Desc: {this.props.description}</p>
      </React.Fragment>
    );
  }
}
 
ReactDOM.render(<App />, document.getElementById("root"));
