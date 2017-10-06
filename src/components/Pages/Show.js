import React, { PropTypes } from 'react';
import Header from '../Header'; 

const ShowPage = ({
  page
}) => {
  return (
    <div className="App">
    <Header txtTitle='Show'/>
<article>

        <div >
          <h1>{page.title}</h1>
          <h1>{page.content}</h1>  
          </div>

        </article>
    </div>
  )
}

ShowPage.propTypes = {
  page: PropTypes.object.isRequired,
}

export default ShowPage
