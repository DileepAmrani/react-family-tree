import React from "react";
import ReactDOM from "react-dom";
import OrgChart from "react-orgchart";

import "react-orgchart/index.css";
import "./styles.css";

const initechOrg = {
  name: "Dileep Kumar",
  actor: "Gary Cole",
  children: [
    {
      name: "Peter Gibbons",
      actor: "Ron Livingston",
      children: [
        {
          name: "And More!!",
          actor:
            "Henry"
        },
        {
          name: "And More!!",
          actor:
            "Henry"
        }
      ]
    },
    {
      name: "Milton Waddams",
      actor: "Stephen Root"
    },
    {
      name: "Bob Slydell",
      actor: "John C. McGi..."
    }
  ]
};

function MyNodeComponent({ node }) {
  return (
    <div
      className="initechNode"
      // onClick={() => alert("Hi my real name is: " + node.actor)}
    >
      <div style={{display: 'flex'}}>
      <div  style={{flex: "1"}}>
      <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX12863047.jpg' />
      </div>
      <div style={{flex: "2"}}>
      <br />
        <span>
         {node.name}
        </span><br />
        <span>
         {node.actor}
        </span> <br />

      </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App" id="initechOrgChart">
      <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
