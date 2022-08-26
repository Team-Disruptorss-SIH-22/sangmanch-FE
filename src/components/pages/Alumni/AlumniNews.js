import axios from "axios";
import React, { useEffect } from "react";
import styles from "styles/admin/alumniNews.module.css";

const AlumniNews = () => {
  const apiKey = "b27017b05ad94a1e9327d75c97030af9";
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
  const [articles, setArticles] = React.useState([]);

  const fetchNews = async () => {
    const { data } = await axios.get(url);
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <p className={styles.sectionHeading}>What's New</p>
      {articles &&
        articles.map((article) => (
          <div key={article.title} className={styles.article}>
            {article.urlToImage && <img src={article.urlToImage} />}
            <div className={styles.articleData}>
              <h3 className={styles.title}>{article.title}</h3>
              <p className={styles.description}>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AlumniNews;
