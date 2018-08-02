import React from "react";

import Banner from "./Banner"
import FieldWidget from "./FieldWidget"
import FieldSelectionWidget from "./FieldSelectionWidget"

const Home = () => (
  <div>
    <Banner/>
    <FieldSelectionWidget/>
    <FieldWidget/>
  </div>
);

export default Home
