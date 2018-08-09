import React from "react";
import {Container} from "semantic-ui-react"
import "./style.css";

const FieldBanner = ({title='title'}) => (  
  <div className="fieldBanner">
    <h1 className="">{title}</h1>
  </div>
);

export default FieldBanner;
