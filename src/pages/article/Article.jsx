import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import instance from '../../services/api';
import { Button, Container, SingleCardSkeleton } from '../../utils';
import "./Article.scss";
import { useValue } from '../../context/AppProvider';

const Article = () => {
  const [state] = useValue();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [userdata, setUserdata] = useState(null)
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    instance(`/api/posts/${id}`)
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    })

    instance(`/api/users/${state.auth.user_id}`)
    .then(res => {
      setUserdata(res.data.data)
    })
    .catch((err) => {
      console.log(err);
    })

  }, [])

  console.log(userdata)


  return (
    <Container>
      {!loading ?
        <div className='single-article'>
          <h2>{data.title}</h2>
          <img src={data.image} alt="picture" />
          <p>{data.title}</p>

          <p>{data.description}</p>
        </div> :
        <SingleCardSkeleton amount={10} />
      }

      <form className='article__comment-form'>
        <div className='article__comment-user'>

        </div>
        <div className='article__comment-wrapper'>
          <textarea cols="30" rows="10" className='article__comment'></textarea>
          <Button text="Comment"  type={"Submit"}/>
        </div>
      </form>
    </Container>
  )
}

export default Article