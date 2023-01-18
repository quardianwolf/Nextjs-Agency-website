import React from "react";
import { Minimal, WithLayout } from "../src/layouts";
import Media from "../src/views/Media";

const MediaPage = () => {
  return <WithLayout component={Media} layout={Minimal} />;
};

export default MediaPage;
