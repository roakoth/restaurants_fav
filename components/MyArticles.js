import React from "react"
import { sbEditable } from "@storyblok/storyblok-editable"
import styles from '../styles/Home.module.css'
import Article from "./Article"


const MyArticles = ({ blok }) => {
    return (
  <div {...sbEditable(blok)} className={styles.articleWide}>
  <div>
     <h2 className={styles.title}> {blok.title} </h2> 
  </div>
   
   {/* <div>  */}

      <ul className={styles.articleGrid}>
          {blok.articles.map((article) => (
              
          <li key={article._uid} className={styles.list}>
             <Article blok={article.content} />
          </li>
          )
          )}
      </ul>
    {/* </div>  */}
  </div>
 
    )
}

export default MyArticles;