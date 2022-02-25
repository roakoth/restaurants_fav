import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable"
import styles from '../styles/Home.module.css'

const Header = ({ blok }) => {
    return (
        <div {...sbEditable(blok)} className={styles.description}>
           <h2 className={styles.title}>{blok.headline}</h2>
           <p> {blok.description} </p>
        </div>  

    )
}

export default Header;
