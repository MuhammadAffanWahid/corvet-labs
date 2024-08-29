// import React from 'react';
// import styles from './QAEngagement.module.css';

// // Import the SVG icons
// import staffAugmentationIcon from '../../assets/QAEngagement/staff.svg';
// import dedicatedTeamsIcon from '../../assets/QAEngagement/team.svg';
// import productDevelopmentIcon from '../../assets/QAEngagement/development.svg';

// const engagementModels = [
//     {
//         id: 1,
//         title: 'Staff Augmentation',
//         icon: staffAugmentationIcon,
//     },
//     {
//         id: 2,
//         title: 'Dedicated Teams',
//         icon: dedicatedTeamsIcon,
//     },
//     {
//         id: 3,
//         title: 'Product Development',
//         icon: productDevelopmentIcon,
//     },
// ];

// const QAEngagement = () => {
//     return (
//         <section className={styles.qaEngagementSection}>
//             <div className={styles.contentContainer}>
//                 <h2 className={styles.heading}>Our Engagement Models To Meet Your Needs</h2>
//                 <p className={styles.subheading}>
//                     Our pocket-friendly models guarantee to provide software testing services that are pocket-friendly and tailored to fulfill all your project requirements.
//                 </p>
//                 <div className={styles.modelsContainer}>
//                     {engagementModels.map(model => (
//                         <div key={model.id} className={styles.modelCard}>
//                             <img src={model.icon} alt={`${model.title} icon`} className={styles.icon} />
//                             <h3 className={styles.modelTitle}>{model.title}</h3>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default QAEngagement;

import React from 'react';
import styles from './QAEngagement.module.css';

// Import the SVG icons
import staffAugmentationIcon from '../../assets/QAEngagement/staff.svg';
import dedicatedTeamsIcon from '../../assets/QAEngagement/team.svg';
import productDevelopmentIcon from '../../assets/QAEngagement/development.svg';

const engagementModels = [
    {
        id: 1,
        title: 'Staff Augmentation',
        icon: staffAugmentationIcon,
    },
    {
        id: 2,
        title: 'Dedicated Teams',
        icon: dedicatedTeamsIcon,
    },
    {
        id: 3,
        title: 'Product Development',
        icon: productDevelopmentIcon,
    },
];

const QAEngagement = () => {
    return (
        <section className={styles.qaEngagementSection}>
            <div className={styles.contentContainer}>
                <h2 className={styles.heading}>Our Engagement Models To Meet Your Needs</h2>
                <p className={styles.subheading}>
                    Our pocket-friendly models guarantee to provide software testing services that are pocket-friendly and tailored to fulfill all your project requirements.
                </p>
                <div className={styles.modelsContainer}>
                    {engagementModels.map(model => (
                        <div key={model.id} className={styles.modelCard}>
                            <img src={model.icon} alt={`${model.title} icon`} className={styles.icon} />
                            <h3 className={styles.modelTitle}>{model.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QAEngagement;