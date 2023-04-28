import styles from "./HomepageLinks.module.css";
import HomepageLinkItem from "../HomePageLinkItem/HomepageLinkItem";
import Card from "../../UIComponents/Card/Card";

const HomepageLinks = () => {
  return (
    <Card className={styles.homepage_link_container}>
      <HomepageLinkItem image="web" title="Web Design" />
      <div>
        <HomepageLinkItem image="app" title="App Design" />
        <HomepageLinkItem image="graphic" title="Graphic Design" />
      </div>
    </Card>
  );
};

export default HomepageLinks;
