import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
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
          time: "12:00",
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
        <div className="media mt-1">

          <h3 className="h3-responsive font-weight-bold mr-3">
            {this.props.time}
          </h3>

          <div className="media-body mb-3 mb-lg-3">
            <MDBBadge color="danger" className="ml-2 float-right">
              -
            </MDBBadge>
            <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
            <hr className="hr-bold my-2" />
            {this.props.location && (
              <React.Fragment>
                <p className="font-smaller mb-0">
                  <MDBIcon icon="location-arrow" /> {this.props.location}
                </p>
              </React.Fragment>
            )}
          </div>

        </div>

        {this.props.description && (
          <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
            {this.props.description}
            </p>
          )}
      </React.Fragment>
    );
  }
}

 
ReactDOM.render(<App />, document.getElementById("root"));
