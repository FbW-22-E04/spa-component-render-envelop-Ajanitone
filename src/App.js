import React from "react";
import Envelope from "./Components/Envelope";
import "./CSS/minireset.min.css";

const fromPerson = {
  fullName: "Jon Malkovic",
  address: "46E Begonia Drive",
  zipcode: "St.Catherine,1600",
};

const toPerson = {
  fullName: "Junior Byles",
  address: "20 Kentucky Drive",
  zipcode: "St.James,1700",
};

export default function App() {
  return <Envelope fromPerson={fromPerson} toPerson={toPerson} />;
}
