import React from "react";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage">
        <h1>About Catstagram</h1>
        <p>Project made entirely with React.</p>
        <p>
          This project was made during the two-day React Workshop organized by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactvancouver.com/"
          >
            {" "}
            React Vancouver meetup
          </a>{" "}
          in February 2019.
        </p>
        <p>
          Made with love for cats by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://stefannibrasil.me/"
          >
            {" "}
            Stefanni Brasil
          </a>
        </p>
      </div>
    );
  }
}

export { AboutPage as default };
