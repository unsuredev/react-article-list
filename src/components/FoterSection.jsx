import React from "react";

export default function FoterSection() {
  return (
    <>
      <footer id="footer">
        <p>&copy;Article Post 2020</p>
        <button className="btn btn-footer">
          <a href="https://github.com/devjamal" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </button>
        <button className="btn btn-footer">
          <a href="https://www.freecodecamp.org/rahul626" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true"></i>
          </a>
        </button>
        <button className="btn btn-footer">
          <a href="https://www.linkedin.com/in/devjamal/" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </button>
        <button className="btn btn-footer">
          <a href="https://twitter.com/unsuredev" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </button>
      </footer>
    </>
  );
}
