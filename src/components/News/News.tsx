import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { execute } from '../../redux/actions/news';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';

import Layout from '../../UI/Layout/Layout';
import Button from '../../UI/Button/Button';
import styles from './News.module.css';

const News = () => {
  const { items, message } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch();

  const businessClickHandler = () => {
    dispatch(execute('business'));
  };

  const scinceClickHandler = () => {
    dispatch(execute('science'));
  };

  const sportsClickHandler = () => {
    dispatch(execute('sports'));
  };

  const techbologyClickHandler = () => {
    dispatch(execute('technology'));
  };

  return (
    <Layout>
      <h2>News</h2>
      <div className={styles.news__buttons}>
        <Button onClick={businessClickHandler}>Business</Button>
        <Button onClick={scinceClickHandler}>Science</Button>
        <Button onClick={sportsClickHandler}>Sports</Button>
        <Button onClick={techbologyClickHandler}>Technology</Button>
      </div>
      <div className={styles.news__items}>
        {items &&
          items.map((item, index) => (
            <div className={styles.news__item} key={index}>
              <div className={styles.item__top}>
                <img src={item.urlToImage} alt="newsPhoto" />
                <div className={styles.top__description}>
                  <span>{item.author}</span>
                  <span>{new Date(item.publishedAt).toDateString()}</span>
                </div>
              </div>
              <div className={styles.item__bottom}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noreferrer">
                  Read more..
                </a>
              </div>
            </div>
          ))}
        {message && <p className={styles.item__error}>{message}</p>}
      </div>
    </Layout>
  );
};

export default withAuthRedirect(News);
