import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from './ContactUsForm.module.css';
import { contactUsFormContent } from '../../content'; // Import the content

const ContactUsForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const form = useRef();  // useRef for the form

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('service_yxh7cfe', 'template_k53npoh', form.current, {
            publicKey: '1cVCZ6R1bGo6efBGC',
        })
        .then(
            () => {
                setIsSubmitting(false);
                setSubmitMessage("Message sent successfully!");
                form.current.reset();  // Reset form after successful submission
            },
            (error) => {
                setIsSubmitting(false);
                setSubmitMessage("An error occurred. Please try again.");
                console.log('FAILED...', error.text);
            }
        );
    };

    const { heading, subHeading, serviceOptions, formFields, infoSection } = contactUsFormContent;

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.formContainer}>
                    <h1 className={styles.heading}>{heading}</h1>
                    <p className={styles.subHeading}>{subHeading}</p>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className={styles.radioGroup}>
                            {serviceOptions.map(option => (
                                <label key={option.value} className={styles.radioLabel}>
                                    <input type="radio" name="serviceType" value={option.value} />
                                    {option.label}
                                </label>
                            ))}
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                name="user_name"
                                className={styles.input}
                                type="text"
                                placeholder={formFields.name}
                            />
                            <input
                                name="contactNumber"
                                className={styles.input}
                                type="text"
                                placeholder={formFields.contactNumber}
                            />
                        </div>

                        <input
                            name="user_email"
                            className={styles.inputFullWidth}
                            type="email"
                            placeholder={formFields.email}
                        />

                        <input
                            name="techStack"
                            className={styles.inputFullWidth}
                            type="text"
                            placeholder={formFields.techStack}
                        />

                        <textarea
                            name="message"
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

                        <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : formFields.submitButton}
                        </button>

                        {submitMessage && <p>{submitMessage}</p>}

                        <div className={styles.recaptcha}>
                            <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                        </div>
                    </form>
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