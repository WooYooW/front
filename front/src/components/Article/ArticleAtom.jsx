import React from 'react';
import { Link } from 'react-router-dom';

function ArticleAtom({ article }) {
  return (
    <tr>
      <td>{article.articleId + 1}</td>
      <td>
        <Link to={`/article/${article.articleId}`}>{article.articleTitle}</Link>
      </td>
      <td>{article.articleUser}</td>
      <td>{article.articleCreatedTime}</td>
    </tr>
  );
}

export default ArticleAtom;
