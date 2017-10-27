import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
              This is the footer me page.

              <button onClick={() => alert('click')}>
                  click here
              </button>

            </div>
        );
    }
}