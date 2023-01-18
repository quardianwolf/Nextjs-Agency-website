import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Proje from "../src/views/Proje";

const ProjePage = () => {
  return <WithLayout component={Proje} layout={Minimal} />;
};

export default ProjePage;
