import React from "react"
import DynamicComponent from "../components/DynamicComponent"
import { sbEditable } from "@storyblok/storyblok-editable"
import styles from '../styles/Home.module.css'

const Grid = ({ blok }) => {
    return(
       <div {...sbEditable(blok)} className={styles.grid}>
       {
           blok.columns.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
           )  
           )
           
       }
       </div> 
    );
};

export default Grid;