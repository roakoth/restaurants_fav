import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable"
import styles from '../styles/Home.module.css'

const Header = ({ blok }) => {
    return (
        <div {...sbEditable(blok)} className={styles.description}>
           <h4 className={styles.title}>{blok.headline}</h4>
           <h2> {blok.description} </h2>
        </div>  

    )
}

export default Header;
