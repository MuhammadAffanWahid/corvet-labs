// import React, { useState } from 'react';
// import styles from './TechStack.module.css';
// import image1 from '../../assets/TechStack/angular.svg';
// import image2 from '../../assets/TechStack/ant_design.svg';
// import image3 from '../../assets/TechStack/aurelia.svg';
// import image4 from '../../assets/TechStack/aws_dynamodb.svg';
// import image5 from '../../assets/TechStack/backbone_js.svg';
// import image6 from '../../assets/TechStack/css.svg';
// import image7 from '../../assets/TechStack/d3_js.svg';
// import image8 from '../../assets/TechStack/django.svg';
// import image9 from '../../assets/TechStack/elixir.svg';
// import image10 from '../../assets/TechStack/c_sharp.svg';
// import image11 from '../../assets/TechStack/kotlin.svg';

// // Import more images as needed

// const images = {
//   frontend: [image1, image2, image3,image4],
//   backend: [ image5, image6,image7,],
//   libraries: [image8, image9, image10, image11],
//   databse: [image1, image5, image8, image11],
// };

// const TabbedGallery = () => {
//   const [activeTab, setActiveTab] = useState('frontend');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className={styles.tabContainer}>
//       <div className={styles.tabs}>
//         <button onClick={() => handleTabClick('frontend')} className={activeTab === 'frontend' ? styles.active : ''}>frontend</button>
//         <button onClick={() => handleTabClick('backend')} className={activeTab === 'backend' ? styles.active : ''}>backend</button>
//         <button onClick={() => handleTabClick('libraries')} className={activeTab === 'libraries' ? styles.active : ''}>libraries</button>
//         <button onClick={() => handleTabClick('databse')} className={activeTab === 'databse' ? styles.active : ''}>databse</button>
//       </div>
//       <div className={styles.images}>
//         {images[activeTab].map((src, index) => (
//           <img key={index} src={src} alt={`Image ${index}`} className={styles.image} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TabbedGallery;

// import React, { useState } from 'react';
// import styles from './TechStack.module.css';
// import image1 from '../../assets/TechStack/angular.svg';
// import image2 from '../../assets/TechStack/ant_design.svg';
// import image3 from '../../assets/TechStack/aurelia.svg';
// import image4 from '../../assets/TechStack/aws_dynamodb.svg';
// import image5 from '../../assets/TechStack/backbone_js.svg';
// import image6 from '../../assets/TechStack/css.svg';
// import image7 from '../../assets/TechStack/d3_js.svg';
// import image8 from '../../assets/TechStack/django.svg';
// import image9 from '../../assets/TechStack/elixir.svg';
// import image10 from '../../assets/TechStack/c_sharp.svg';
// import image11 from '../../assets/TechStack/kotlin.svg';

// const images = {
//   frontend: [image1, image2, image3, image4],
//   backend: [image5, image6, image7],
//   libraries: [image8, image9, image10, image11],
//   databse: [image1, image5, image8, image11],
// };

// const TabbedGallery = () => {
//   const [activeTab, setActiveTab] = useState('frontend');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className={styles.tabContainer}>
//       <div className={styles.tabs}>
//         <button onClick={() => handleTabClick('frontend')} className={activeTab === 'frontend' ? styles.active : ''}>Frontend</button>
//         <button onClick={() => handleTabClick('backend')} className={activeTab === 'backend' ? styles.active : ''}>Backend</button>
//         <button onClick={() => handleTabClick('libraries')} className={activeTab === 'libraries' ? styles.active : ''}>Libraries</button>
//         <button onClick={() => handleTabClick('databse')} className={activeTab === 'databse' ? styles.active : ''}>Database</button>
//       </div>
//       <div className={styles.images}>
//         {images[activeTab].map((src, index) => (
//           <div key={index} className={styles.imageBox}>
//             <img src={src} alt={`Image ${index}`} className={styles.image} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TabbedGallery;

import React, { useState } from "react";
import styles from "./TechStack.module.css";
import angular from "../../assets/TechStack/angular.svg";
import ant from "../../assets/TechStack/ant_design.svg";
import aurelia from "../../assets/TechStack/aurelia.svg";
import aws_dynamodb from "../../assets/TechStack/aws_dynamodb.svg";
import backbone_js from "../../assets/TechStack/backbone_js.svg";
import bootstrap from "../../assets/TechStack/bootstrap.svg";
import c_sharp from "../../assets/TechStack/c_sharp.svg";
import core_ui from "../../assets/TechStack/core_ui.svg";
import couchdb from "../../assets/TechStack/couchdb.svg";
import css from "../../assets/TechStack/css.svg";
import d3_js from "../../assets/TechStack/d3_js.svg";
import django from "../../assets/TechStack/django.svg";
import elixir from "../../assets/TechStack/elixir.svg";
import ember_js from "../../assets/TechStack/ember_js.svg";
import emotion from "../../assets/TechStack/emotion.svg";
import firebase from "../../assets/TechStack/firebase.svg";
import flow_js from "../../assets/TechStack/flow_js.svg";
import gatsby from "../../assets/TechStack/gatsby.svg";
import golang from "../../assets/TechStack/golang.svg";
import html from "../../assets/TechStack/html.svg";
import indexed_db from "../../assets/TechStack/indexed_db.svg";
import java from "../../assets/TechStack/java.svg";
import jquery from "../../assets/TechStack/jquery.svg";
import kotlin from "../../assets/TechStack/kotlin.svg";
import lodash from "../../assets/TechStack/lodash.svg";
import material_ui from "../../assets/TechStack/material_ui.svg";
import microsoft_sql_server from "../../assets/TechStack/microsoft_sql_server.svg";
import mobx from "../../assets/TechStack/mobx.svg";
import mongodb from "../../assets/TechStack/mongodb.svg";
import mysql from "../../assets/TechStack/mysql.svg";
import next_js from "../../assets/TechStack/next_js.svg";
import node_js from "../../assets/TechStack/node_js.svg";
import nuxt from "../../assets/TechStack/nuxt.svg";
import postgresql from "../../assets/TechStack/postgresql.svg";
import react_js from "../../assets/TechStack/react_js.svg";
import redis from "../../assets/TechStack/redis.svg";
import redux from "../../assets/TechStack/redux.svg";
import python from "../../assets/TechStack/python.svg";
import ruby_on_rails from "../../assets/TechStack/ruby_on_rails.svg";
import rust from "../../assets/TechStack/rust.svg";
import rx_js from "../../assets/TechStack/rx_js.svg";
import scala from "../../assets/TechStack/scala.svg";
import semantic_ui from "../../assets/TechStack/semantic_ui.svg";
import sqlite from "../../assets/TechStack/sqlite.svg";
import styled_component from "../../assets/TechStack/styled_component.svg";
import svelte from "../../assets/TechStack/svelte.svg";
import swift from "../../assets/TechStack/swift.svg";
import tailwind from "../../assets/TechStack/tailwind.svg";
import vue_js from "../../assets/TechStack/vue_js.svg";
import web_3 from "../../assets/TechStack/web3_js.svg";

const images = {
    frontend: [
      { src: angular, label: "Angular" },
      { src: ant, label: "Ant Design" },
      { src: aurelia, label: "Aurelia" },
      { src: bootstrap, label: "Bootstrap" },
      { src: css, label: "CSS" },
      { src: d3_js, label: "D3.js" },
      { src: ember_js, label: "Ember.js" },
      { src: gatsby, label: "Gatsby" },
      { src: html, label: "HTML" },
      { src: jquery, label: "jQuery" },
      { src: lodash, label: "Lodash" },
      { src: material_ui, label: "Material UI" },
      { src: next_js, label: "Next.js" },
      { src: nuxt, label: "Nuxt" },
      { src: react_js, label: "React.js" },
      { src: svelte, label: "Svelte" },
      { src: tailwind, label: "Tailwind" },
      { src: vue_js, label: "Vue.js" },
    ],
    backend: [
      { src: aws_dynamodb, label: "AWS DynamoDB" },
      { src: c_sharp, label: "C#" },
      { src: django, label: "Django" },
      { src: elixir, label: "Elixir" },
      { src: golang, label: "Golang" },
      { src: java, label: "Java" },
      { src: kotlin, label: "Kotlin" },
      { src: node_js, label: "Node.js" },
      { src: python, label: "Python" },
      { src: ruby_on_rails, label: "Ruby on Rails" },
      { src: rust, label: "Rust" },
      { src: scala, label: "Scala" },
      { src: swift, label: "Swift" },
    ],
    libraries: [
      { src: ant, label: "Ant Design" },
      { src: aurelia, label: "Aurelia" },
      { src: backbone_js, label: "Backbone.js" },
      { src: core_ui, label: "Core UI" },
      { src: emotion, label: "Emotion" },
      { src: flow_js, label: "Flow.js" },
      { src: mobx, label: "MobX" },
      { src: redux, label: "Redux" },
      { src: rx_js, label: "RxJS" },
      { src: semantic_ui, label: "Semantic UI" },
      { src: styled_component, label: "Styled Components" },
    ],
    databse: [
      { src: couchdb, label: "CouchDB" },
      { src: firebase, label: "Firebase" },
      { src: indexed_db, label: "IndexedDB" },
      { src: mongodb, label: "MongoDB" },
      { src: microsoft_sql_server, label: "Microsoft SQL Server" },
      { src: mysql, label: "MySQL" },
      { src: postgresql, label: "PostgreSQL" },
      { src: redis, label: "Redis" },
      { src: sqlite, label: "SQLite" },
      { src: web_3, label: "Web 3.0" },
    ],
  };
  

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      <h1 className={styles.title}>The Technology Stacks We Specialize In</h1>
      <p className={styles.description}>
        Our senior software engineers for web application development services
        rank among the world’s best talent currently. Following are the tech
        stacks we offer:
      </p>
      <div className={styles.tabs}>
        <button
          onClick={() => handleTabClick("frontend")}
          className={activeTab === "frontend" ? styles.active : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => handleTabClick("backend")}
          className={activeTab === "backend" ? styles.active : ""}
        >
          Backend
        </button>
        <button
          onClick={() => handleTabClick("libraries")}
          className={activeTab === "libraries" ? styles.active : ""}
        >
          Libraries
        </button>
        <button
          onClick={() => handleTabClick("databse")}
          className={activeTab === "databse" ? styles.active : ""}
        >
          Database
        </button>
      </div>
      <div className={styles.images}>
        {images[activeTab].map((item, index) => (
          <div key={index} className={styles.imageBox}>
            <img
              src={item.src}
              alt={`Image ${index}`}
              className={styles.image}
            />
            <div className={styles.imageLabel}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedGallery;
