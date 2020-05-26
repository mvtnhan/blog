import React from "react";

import { About } from "./about.js";
import { Contact } from "./contact.js";
import { Footer } from "./footer.js";
import { Intro } from "./intro.js";
import { MoreWorks } from "./moreWorks.js";
import TopNavBar from "../../components/top-navigation-bar.js";

export default function Homepage() {
  return (
    <>
      <TopNavBar />
      <Intro />
      <MoreWorks />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
