import styles from "./HomepageFeatures.module.css";
import HomepageFeaturesItem from "../HomepageFeaturesItem/HomepageFeaturesItem";

import passionate from "../../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../../../assets/home/desktop/illustration-friendly.svg";

const HomepageFeatures = () => {
  return (
    <div className={styles.homepage_feature_container}>
      <HomepageFeaturesItem
        image={passionate}
        title="Passionate"
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
      />
      <HomepageFeaturesItem
        image={resourceful}
        title="Resourceful"
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
      />
      <HomepageFeaturesItem
        image={friendly}
        title="Friendly"
        description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
      />
    </div>
  );
};

export default HomepageFeatures;
