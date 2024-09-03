import React, { useState } from "react";
import styles from './ContactUsForm.module.css';

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

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.heading}>We Got Your Back</h1>
            <p className={styles.subHeading}>Submit a short brief to build, launch and grow.</p>

            <div className={styles.radioGroup}>
                <label
                    className={styles.radioLabel}
                    onMouseEnter={() => setTooltip('Staff Augmentation')}
                    onMouseLeave={() => setTooltip(null)}
                    onClick={() => handleTooltipToggle('Staff Augmentation')}
                >
                    <input type="radio" name="serviceType" value="Staff Augmentation" />
                    Staff Augmentation
                    {tooltip === 'Staff Augmentation' && (
                        <div className={styles.tooltip}>Enhance your existing team with skilled professionals.</div>
                    )}
                </label>
                <label
                    className={styles.radioLabel}
                    onMouseEnter={() => setTooltip('Dedicated Teams')}
                    onMouseLeave={() => setTooltip(null)}
                    onClick={() => handleTooltipToggle('Dedicated Teams')}
                >
                    <input type="radio" name="serviceType" value="Dedicated Teams" />
                    Dedicated Teams
                    {tooltip === 'Dedicated Teams' && (
                        <div className={styles.tooltip}>Assemble the teams tailored to your business goals.</div>
                    )}
                </label>
                <label
                    className={styles.radioLabel}
                    onMouseEnter={() => setTooltip('Fixed Gigs')}
                    onMouseLeave={() => setTooltip(null)}
                    onClick={() => handleTooltipToggle('Fixed Gigs')}
                >
                    <input type="radio" name="serviceType" value="Fixed Gigs" />
                    Fixed Gigs
                    {tooltip === 'Fixed Gigs' && (
                        <div className={styles.tooltip}>Get project-based work done with clear deliverables.</div>
                    )}
                </label>
            </div>

            <div className={styles.inputGroup}>
                <input
                    name="name"
                    value={formContent.name || ''}
                    onChange={handleChange}
                    className={styles.input}
                    type="text"
                    placeholder="Full name*"
                />
                <input
                    name="contactNumber"
                    value={formContent.contactNumber || ''}
                    onChange={handleChange}
                    className={styles.input}
                    type="text"
                    placeholder="Contact Number"
                />
            </div>

            <input
                name="email"
                value={formContent.email || ''}
                onChange={handleChange}
                className={styles.inputFullWidth}
                type="email"
                placeholder="Email*"
            />

            <input
                name="techStack"
                value={formContent.techStack || ''}
                onChange={handleChange}
                className={styles.inputFullWidth}
                type="text"
                placeholder="Enter your preferred tech stack..."
            />

            <textarea
                name="message"
                value={formContent.message || ''}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell us how we can help.*"
            />

            <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="getNDA" />
                    Get NDA
                </label>
                <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="terms" />
                    I understand and agree to the terms & conditions.
                </label>
            </div>

            <button className={styles.submitButton}>Send Message</button>

            <div className={styles.recaptcha}>
                <div className="g-recaptcha" data-sitekey="your_site_key"></div>
            </div>
        </div>
    );
};

export default ContactUsForm;