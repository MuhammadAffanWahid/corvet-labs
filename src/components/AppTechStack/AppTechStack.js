import React from 'react';
import styles from './AppTechStack.module.css';

import CordovaIcon from '../../assets/AppTechStack/Cordova.svg';
import FlutterIcon from '../../assets/AppTechStack/Flutter.svg';
import IonicIcon from '../../assets/AppTechStack/Ionic.svg';
import iOSIcon from '../../assets/AppTechStack/iOS.svg';
import KotlinIcon from '../../assets/AppTechStack/Kotlin.svg';
import PhoneGapIcon from '../../assets/AppTechStack/PhoneGap.svg';
import ReactNativeIcon from '../../assets/AppTechStack/ReactNative.svg';
import SwiftIcon from '../../assets/AppTechStack/Swift.svg';
import VisualStudioIcon from '../../assets/AppTechStack/VisualStudio.svg';
import XamarinIcon from '../../assets/AppTechStack/Xamarin.svg';

const techList = [
  { name: 'Cordova', icon: CordovaIcon },
  { name: 'Flutter', icon: FlutterIcon },
  { name: 'Ionic', icon: IonicIcon },
  { name: 'iOS', icon: iOSIcon },
  { name: 'Kotlin', icon: KotlinIcon },
  { name: 'Phone Gap', icon: PhoneGapIcon },
  { name: 'React Native', icon: ReactNativeIcon },
  { name: 'Swift', icon: SwiftIcon },
  { name: 'Visual Studio', icon: VisualStudioIcon },
  { name: 'Xamarin', icon: XamarinIcon },
];

const TechGrid = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Revolutionize Your Brand With Advanced Mobile Application Development Platforms
      </h2>
      <div className={styles.grid}>
        {techList.map((tech, index) => (
          <div key={index} className={styles.card}>
            <img src={tech.icon} alt={tech.name} className={styles.icon} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGrid;