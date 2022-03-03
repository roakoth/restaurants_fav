import React from "react"
import { sbEditable } from "@storyblok/storyblok-editable"
import styles from '../styles/Home.module.css'


const Article = ({ blok }) => {
    return (
  <div {...sbEditable(blok)} className={styles.card}>
     <img className={styles.img} src={blok.hero_image.filename} alt="tour_image" width={250} height={200} /> 
   <h2 className={styles.titles}> {blok.title} </h2>
    <p>{blok.experience}</p>
    <p> {blok.author}</p>
  </div>
    )
}

export default Article;