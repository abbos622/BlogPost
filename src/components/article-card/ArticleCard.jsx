import React, { useState } from 'react'
import "./ArticleCard.scss";
import { truncate } from "../../helpers/truncate";
import { removeTags } from '../../helpers/remove-tags';

const ArticleCard = ({image, title, description, author, createdAt, category}) => {
  const [errorPlaceholder, setErrorPlaceholder] = useState(false)
  return (
    <div className='article-card'>
      <div className='article__card-image'>
        <img onError={(e, s) => {
          if(!s){
            setErrorPlaceholder(true)
          }
        }} src={!image  || errorPlaceholder ? "https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF" : image } alt="" />
      </div>
      <h3>{truncate(title, 35, "...")}</h3>
      <p>{(truncate(removeTags(description), 50, "..."))}</p>
      <div>
        <p>{author}</p>
        <p>{createdAt}</p>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default ArticleCard