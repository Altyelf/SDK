import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Policy = () => {

  const [title, setTitle] = useState<string | undefined>()
  const [content, setContent] = useState<string | undefined>()

  const { policy } = useParams<{ policy: string }>();

  useEffect(() => {
    axios
      .get(`https://www.sonarworks.com/api/legal/${policy}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
  })

  return (
    !title || !content ?
      (
        <div
          className="loading">
          Loading...
        </div>
      ) : (
        <>
          <Header />
          <section className="box">
            <h3
              className="title"
            >
              {title}
            </h3>
            <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
            />
          </section>
          <Footer />
        </>
      )
  )
}

export default Policy;
