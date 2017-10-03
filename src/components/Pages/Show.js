import React, { PropTypes } from 'react'
import Header from '../Header'

const ShowPage = ({
  title,
  content
}) => {
  return (
    <div className="App">
    <Header txtTitle='Show'/>
    <article>
      <h1>{title}</h1>
      <p>
        {content}
      </p>
    </article>
    </div>
  )
}

ShowPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default ShowPage
