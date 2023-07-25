import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className="bg-dark text-center text-white ">
      <div
        className="text-center p-1"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a
          className="text-white link"
          href="https://github.com/tarungoyal0025"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tarun Goyal
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
