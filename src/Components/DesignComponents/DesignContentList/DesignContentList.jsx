import { Fragment } from "react";
import styles from "./DesignContentList.module.css";
import DesignContentItem from "../DesignContentItem/DesignContentItem";
import { useSelector } from "react-redux";

import express from "../../../assets/web-design/desktop/image-express.jpg";
import transfer from "../../../assets/web-design/desktop/image-transfer.jpg";
import photon from "../../../assets/web-design/desktop/image-photon.jpg";
import builder from "../../../assets/web-design/desktop/image-builder.jpg";
import blogr from "../../../assets/web-design/desktop/image-blogr.jpg";
import camp from "../../../assets/web-design/desktop/image-camp.jpg";

import airfilter from "../../../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../../../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../../../assets/app-design/desktop/image-faceit.jpg";
import todo from "../../../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../../../assets/app-design/desktop/image-loopstudios.jpg";

import timBrown from "../../../assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "../../../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../../../assets/graphic-design/desktop/image-science.jpg";

const DesignContentList = () => {
  const service = useSelector((state) => state.service);

  return (
    <div className={styles.design_content_list_container}>
      {service === "Web" && (
        <Fragment>
          <DesignContentItem
            image={express}
            title="Express"
            description="A multi-carrier shipping website for ecommerce businesses"
          />
          <DesignContentItem
            image={transfer}
            title="Transfer"
            description="Site for low-cost money transfers and sending money within seconds"
          />
          <DesignContentItem
            image={photon}
            title="Photon"
            description="A state-of-the-art music player with high-resolution audio and DSP effects"
          />
          <DesignContentItem
            image={builder}
            title="Builder"
            description="Connects users with local contractors based on their location"
          />
          <DesignContentItem
            image={blogr}
            title="Blogr"
            description="Blogr is a platform for creating an online blog or publication"
          />
          <DesignContentItem
            image={camp}
            title="Camp"
            description="Get expert training in coding, data, design, and digital marketing"
          />
        </Fragment>
      )}
      {service === "App" && (
        <Fragment>
          <DesignContentItem
            image={airfilter}
            title="Airfilter"
            description="Solving the problem of poor indoor air quality by filtering the air"
          />
          <DesignContentItem
            image={eyecam}
            title="Eyecam"
            description="Product that lets you edit your favorite photos and videos at any time"
          />
          <DesignContentItem
            image={faceit}
            title="Faceit"
            description="Get to meet your favorite internet superstar with the faceit app"
          />
          <DesignContentItem
            image={todo}
            title="Todo"
            description="A todo app that features cloud sync with light and dark mode"
          />
          <DesignContentItem
            image={loopstudios}
            title="Loopstudios"
            description="A VR experience app made for Loopstudios"
          />
        </Fragment>
      )}
      {service === "Graphic" && (
        <Fragment>
          <DesignContentItem
            image={timBrown}
            title="Tim Brown"
            description="A book cover designed for Tim Brown’s new release, ‘Change’"
          />
          <DesignContentItem
            image={boxedWater}
            title="Boxed Water"
            description="A simple packaging concept made for Boxed Water"
          />
          <DesignContentItem
            image={science}
            title="Science!"
            description="A poster made in collaboration with the Federal Art Project"
          />
        </Fragment>
      )}
    </div>
  );
};

export default DesignContentList;
