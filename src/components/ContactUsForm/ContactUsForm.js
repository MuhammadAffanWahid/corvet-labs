import React, { useState } from "react";
import styles from './ContactUsForm.module.css';
import { contactUsFormContent } from '../../content'; // Import the content

const ContactUsForm = () => {
    const [formContent, setFormContent] = useState({});
    const [tooltip, setTooltip] = useState(null);

    const handleChange = (event) => {
        const { value, name } = event.target;

        setFormContent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleTooltipToggle = (option) => {
        setTooltip(prev => (prev === option ? null : option));
    };

    const { heading, subHeading, serviceOptions, formFields, infoSection } = contactUsFormContent;

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.formContainer}>
                    <h1 className={styles.heading}>{heading}</h1>
                    <p className={styles.subHeading}>{subHeading}</p>

                    <div className={styles.radioGroup}>
                        {serviceOptions.map(option => (
                            <label
                                key={option.value}
                                className={styles.radioLabel}
                                onMouseEnter={() => setTooltip(option.value)}
                                onMouseLeave={() => setTooltip(null)}
                                onClick={() => handleTooltipToggle(option.value)}
                            >
                                <input type="radio" name="serviceType" value={option.value} />
                                {option.label}
                                {tooltip === option.value && (
                                    <div className={styles.tooltip}>{option.tooltip}</div>
                                )}
                            </label>
                        ))}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            name="name"
                            value={formContent.name || ''}
                            onChange={handleChange}
                            className={styles.input}
                            type="text"
                            placeholder={formFields.name}
                        />
                        <input
                            name="contactNumber"
                            value={formContent.contactNumber || ''}
                            onChange={handleChange}
                            className={styles.input}
                            type="text"
                            placeholder={formFields.contactNumber}
                        />
                    </div>

                    <input
                        name="email"
                        value={formContent.email || ''}
                        onChange={handleChange}
                        className={styles.inputFullWidth}
                        type="email"
                        placeholder={formFields.email}
                    />

                    <input
                        name="techStack"
                        value={formContent.techStack || ''}
                        onChange={handleChange}
                        className={styles.inputFullWidth}
                        type="text"
                        placeholder={formFields.techStack}
                    />

                    <textarea
                        name="message"
                        value={formContent.message || ''}
                        onChange={handleChange}
                        className={styles.textarea}
                        placeholder={formFields.message}
                    />

                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="getNDA" />
                            {formFields.getNDA}
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="terms" />
                            {formFields.terms}
                        </label>
                    </div>

                    <button className={styles.submitButton}>{formFields.submitButton}</button>

                    <div className={styles.recaptcha}>
                        <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                    </div>
                </div>
            </div>

            <div className={styles.infoSection}>
                <div className={styles.infoBox}>
                    <h2>{infoSection.title}</h2>
                    {infoSection.items.map((item, index) => (
                        <div key={index} className={styles.infoItem}>
                            <h3>{item.heading}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;