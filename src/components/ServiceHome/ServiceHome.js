import React from "react";
import styles from "./ServiceHome.module.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServiceHome = (props) => {
    return (
        <div className={`${styles.box} user-select-none`}>
            <img src={props.icon} alt="" className={styles.img} />
            <p className={styles.heading}>{props.heading}</p>
            <p className={styles.text}>{props.content}</p>
            <Link to={`/individual-service?id=${props.id}`}>
                <HiOutlineArrowNarrowRight
                    className={styles.to}
                    size="2rem"
                    color="#0765DA"
                />
            </Link>
        </div>
    );
};
export default ServiceHome;
