import React, { Component } from "react";
import { Carousel, Button, Form } from "react-bootstrap";
import "./App.css";
import Particles from "react-particles-js";
import slide2 from "./assets/images/slide2.jpg";
import earth from "./assets/images/earth.jpg";
import slide1 from "./assets/images/slide1.jpeg";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide1: "",
      slide2: "",
      slide3: "",
      slide4: "",
      slide5: "",
      nr: 0,
      style: { display: "none" },
      index: 0,
      select1: { display: "block" },
      select2: { display: "block" },
      select3: { display: "block" },
      select4: { display: "block" },
      select5: { display: "block" }
    };
  }

  checkButton() {
    if (this.state.nr === 4) this.setState({ style: { display: "block" } });
  }

  render() {
    return (
      <Carousel
        controls={false}
        indicators={false}
        fade={false}
        interval={null}
        activeIndex={this.state.index}
        onSelect={selectedIndex => {
          this.setState({
            index: selectedIndex
          });
        }}
      >
        <Carousel.Item>
          <img className="d-block w-100 slide" src={earth} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="row" id="r1">
              <div className="col-6">
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <div className="row" id="r12">
                      <div className="col-9">
                        <Form.Label className="labelForm">
                          Question 1
                        </Form.Label>
                      </div>
                    </div>
                    <Form.Control
                      as="select"
                      onChange={e => {
                        this.setState({
                          slide1: e.target.value,
                          nr: this.state.nr + 1,
                          index: this.state.index + 1,
                          select1: { display: "none" }
                        });
                      }}
                      size="lg"
                    >
                      <option style={this.state.select1}>
                        Select your choice
                      </option>
                      <option>A.</option>
                      <option>B.</option>
                      <option>C.</option>
                      <option>D.</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="row" id="r2">
              <div className="col-9">
                <p className="descriptionSlide">First slide text</p>
              </div>
            </div>
            <div className="row" id="r3">
              <div className="col-6">
                <Button
                  variant="success"
                  size="lg"
                  block
                  style={this.state.style}
                  onClick={() => {
                    alert("Contrats!\nYou have added a new project!");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 50
                  },
                  line_linked: {
                    enable: false,
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 10
                    }
                  },
                  size: {
                    value: 1,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 80,
                      sync: false
                    }
                  },
                  move: {
                    enable: true,
                    speed: 5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                }
              }}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slide" src={slide2} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="row" id="r1">
              <div className="col-6">
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <div className="row" id="r12">
                      <div className="col-9">
                        <Form.Label className="labelForm">
                          Question 2
                        </Form.Label>
                      </div>
                    </div>
                    <Form.Control
                      as="select"
                      onChange={e => {
                        this.setState({
                          slide2: e.target.value,
                          nr: this.state.nr + 1,
                          index: this.state.index + 1,
                          select2: { display: "none" }
                        });
                      }}
                      size="lg"
                    >
                      <option style={this.state.select2}>
                        Select your choice
                      </option>
                      <option>A.</option>
                      <option>B.</option>
                      <option>C.</option>
                      <option>D.</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="row" id="r2">
              <div className="col-9">
                <p className="descriptionSlide">Second slide text</p>
              </div>
            </div>
            <div className="row" id="r3">
              <div className="col-6">
                <Button
                  variant="success"
                  size="lg"
                  block
                  style={this.state.style}
                  onClick={() => {
                    alert("Contrats!\nYou have added a new project!");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slide" src={slide1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="row" id="r1">
              <div className="col-6">
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <div className="row" id="r12">
                      <div className="col-9">
                        <Form.Label className="labelForm">
                          Question 3
                        </Form.Label>
                      </div>
                    </div>
                    <Form.Control
                      as="select"
                      onChange={e => {
                        this.setState({
                          slide3: e.target.value,
                          nr: this.state.nr + 1,
                          index: this.state.index + 1,
                          select3: { display: "none" }
                        });
                      }}
                      size="lg"
                    >
                      <option style={this.state.select3}>
                        Select your choice
                      </option>
                      <option>A.</option>
                      <option>B.</option>
                      <option>C.</option>
                      <option>D.</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="row" id="r2">
              <div className="col-9">
                <p className="descriptionSlide">Third slide text</p>
              </div>
            </div>
            <div className="row" id="r3">
              <div className="col-6">
                <Button
                  variant="success"
                  size="lg"
                  block
                  style={this.state.style}
                  onClick={() => {
                    alert("Contrats!\nYou have added a new project!");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slide" src={slide2} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="row" id="r1">
              <div className="col-6">
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <div className="row" id="r12">
                      <div className="col-9">
                        <Form.Label className="labelForm">
                          Question 4
                        </Form.Label>
                      </div>
                    </div>
                    <Form.Control
                      as="select"
                      onChange={e => {
                        this.setState({
                          slide4: e.target.value,
                          nr: this.state.nr + 1,
                          index: this.state.index + 1,
                          select4: { display: "none" }
                        });
                      }}
                      size="lg"
                    >
                      <option style={this.state.select4}>
                        Select your choice
                      </option>
                      <option>A.</option>
                      <option>B.</option>
                      <option>C.</option>
                      <option>D.</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="row" id="r2">
              <div className="col-9">
                <p className="descriptionSlide">Fourth slide text</p>
              </div>
            </div>
            <div className="row" id="r3">
              <div className="col-6">
                <Button
                  variant="success"
                  size="lg"
                  block
                  style={this.state.style}
                  onClick={() => {
                    alert("Contrats!\nYou have added a new project!");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slide" src={slide1} alt="First slide" />
          <Carousel.Caption className="carousel-caption">
            <div className="row" id="r1">
              <div className="col-6">
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <div className="row" id="r12">
                      <div className="col-9">
                        <Form.Label className="labelForm">
                          Question 5
                        </Form.Label>
                      </div>
                    </div>
                    <Form.Control
                      as="select"
                      onChange={e => {
                        this.setState({
                          slide5: e.target.value,
                          nr: this.state.nr + 1,
                          index: this.state.index + 1,
                          select5: { display: "none" }
                        });
                        this.checkButton();
                      }}
                      size="lg"
                    >
                      <option style={this.state.select5}>
                        Select your choice
                      </option>
                      <option>A.</option>
                      <option>B.</option>
                      <option>C.</option>
                      <option>D.</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="row" id="r2">
              <div className="col-9">
                <p className="descriptionSlide">Fifth slide text</p>
              </div>
            </div>
            <div className="row" id="r3">
              <div className="col-6">
                <Button
                  variant="success"
                  size="lg"
                  block
                  style={this.state.style}
                  onClick={() => {
                    alert("Contrats!\nYou have added a new project!");
                  }}
                >
                  Submit
                </Button>
                <Button
                  variant="info"
                  size="lg"
                  block
                  style={this.state.style}
                  onClick={() =>
                    this.setState({
                      index: 0
                    })
                  }
                >
                  Re-elect
                </Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
