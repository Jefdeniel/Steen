import React from "react";
import styles from "./style";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Foot,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>Navbar</div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`style.boxWidth`}>Hero</div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`style.boxWidth`}>
        Stats Business Billing Carddeal testimonials clients CTA Footer
      </div>
    </div>
  </div>
);

export default App;
