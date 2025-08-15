import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Director = () => {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetch("/director.json")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);
  return (
    <div className="container">
      <div className="director-container mt-4">
        <div className="row">
          {person.map((importantPerson) => (
            <div className="col-md-4">
              <div className="cart cart2">
                <div className="logo-image">
                  <img width="100%" src={importantPerson.image} alt="" />
                </div>
                <h4 className="mt-4">{importantPerson.name}</h4>
                {/* <p>Age:{importantPerson.age}</p>
                 <p>Gender: {importantPerson.gender}</p> */}
                <p>
                  <small>Position:{importantPerson.position}</small>
                </p>
                <p>Phone: {importantPerson.phone}</p>
                <button className="brd">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Director;
