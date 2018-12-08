import React, { Component } from 'react';
import _ from 'lodash';


class NestedStateTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        firstPageSelected: true,
        secondPageSelected: false,
        thirdPageSelected: false
      }
    };
    this.renderNestedStateTestHead = this.renderNestedStateTestHead.bind(this);
    this.onClickSelectPage = this.onClickSelectPage.bind(this);
    this.selectedBtnDesign = this.selectedBtnDesign.bind(this);
  }

  onClickSelectPage(parm) {
    const buttonStates = { ...this.state.buttons };
    for (const key of Object.keys(buttonStates)) {
      if (parm === key) {
        buttonStates[key] = true;
      } else {
        buttonStates[key] = false;
      }
    }
    this.setState({ buttons: buttonStates });
  }

  selectedBtnDesign(stateCondition) {
      if (stateCondition === true) {
          return { background: '#007BFF', color: 'white' };
      }
      return { background: '#9da09f', color: 'white' };
    }

  renderNestedStateTestHead() {
    const buttonNames = {
      firstPageSelected: 'First Page',
      secondPageSelected: 'Second Page ',
      thirdPageSelected: 'Third Page'
    };
    return (
        <div className="pageContainerHead mt-4">
        {
          _.map(this.state.buttons, (value, key) =>
          <div
            key={key}
            className="btn border" style={this.selectedBtnDesign(value)}
            onClick={() => this.onClickSelectPage(key)}
          >
            {buttonNames[key]}
          </div>
          )
        }
        </div>
    );
  }

  render() {
    console.log('render ==== ', this.state.buttons);
    return (
      <div id="wrapper" className="toggled">

        <div id="page-content-wrapper " className="">
          <div className="container-fluid main-container">

            <h1> Nested State.</h1>
            <div className="">
                {this.renderNestedStateTestHead()}
            </div>

            <div className="mt-4 mx-3 bg-white p-3 ">
                <div className="">
                    {
                      (this.state.buttons.firstPageSelected) &&
                      (
                        <div>
                          <h2>First Page</h2>
                          <h3>How to setState of Nested states.</h3>
                          <pre>

                            {
              `
              constructor(props) {
                super(props);
                this.state = {
                  buttons: {
                    firstPageSelected: true,
                    secondPageSelected: false,
                    thirdPageSelected: false
                  }
                };
              }

              onClickSelectPage(parm) {
                    const buttonStates = { ...this.state.buttons };
                    for (const key of Object.keys(buttonStates)) {
                      if (parm === key) {
                        buttonStates[key] = true;
                      } else {
                        buttonStates[key] = false;
                      }
                    }
                    this.setState({ buttons: buttonStates });
              }
              
              /* ---------------------------------------------------------- */

              selectedBtnDesign(stateCondition) {
                  if (stateCondition === true) {
                      return { background: '#007BFF', color: 'white' };
                  }
                  return { background: '#9da09f', color: 'white' };
                }

              renderNestedStateButtons() {
                const buttonNames = {
                  firstPageSelected: 'First Page',
                  secondPageSelected: 'Second Page ',
                  thirdPageSelected: 'Third Page'
                };
                return (
                    <div className="">
                    {
                      _.map(this.state.buttons, (value, key) =>
                      <div
                        key={key}
                        className="btn border" style={this.selectedBtnDesign(value)}
                        onClick={() => this.onClickSelectPage(key)}
                      >
                        {buttonNames[key]}
                      </div>
                      )
                    }
                    </div>
                );
              }

              `
              }
                          </pre>

                        </div>
                      )
                    }
                    {
                      (this.state.buttons.secondPageSelected) &&
                      (<h1>Second Page</h1>)
                    }
                    {
                      (this.state.buttons.thirdPageSelected) &&
                      (<h1>Third Page</h1>)
                    }
                </div>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default NestedStateTest;
