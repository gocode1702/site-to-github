import React from "react";
import "./styles.css";
import Interval from "./SetInterval/Interval";
import image from "./img/penseur.jpg";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Wahid ",
      bio: "I just love codding",
      avatarUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyvMFzs05Ru9j5urrCfBk4kx_GWp7EYNt0g&usqp=CAU`,
      photo: image,
      profession: "Auditor",
    },
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="triangle-1" />
        <div className="triangle-2" />
        <div className="triangle-3" />
        <div className="triangle-4" />
        <div className="triangle-5" />
        <div className="triangle-6" />
        <div className="triangle-7" />
        <div className="triangle-9">
          <div className="triangle-8" />
        </div>
        <div className="card">
          <author>- WAHID WBA</author>
          <quote>
            <div
              style={{
                display: "flex",
                backgroundImage: `url(${image})`,

                backgroundSize: "contain",
              }}
            >
              <div
                style={{
                  backgroundColor: `blue`,

                  backgroundSize: "contain",
                }}
              >
                {this.state.show && (
                  <>
                    <h3>{this.state.Person.fullName}</h3>
                    <h3>{this.state.Person.bio}</h3>
                    <img
                      src={this.state.Person.photo}
                      alt="wba"
                      width="100px"
                      height="100px"
                    ></img>
                    <h3>{this.state.Person.profession}</h3>
                    <br></br>
                  </>
                )}
                <button onClick={this.handleShowPerson}>click here</button>
              </div>
              <div>
                <Interval />
              </div>
            </div>
          </quote>
        </div>
      </div>
    );
  }
}

export default App;
