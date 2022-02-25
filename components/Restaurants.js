import React from "react"
import { sbEditable } from "@storyblok/storyblok-editable"
import styles from '../styles/Home.module.css'


const Restaurants = ({ blok }) => {
    return (
  <div {...sbEditable(blok)} className={styles.card}>
    <img className={styles.img} src={blok.image.filename} alt="restaurant" width={250} height={200} />
    <p>{blok.description}</p>
    <p> {blok.location}</p>
  </div>
    )
}

export default Restaurants;