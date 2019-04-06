import React from 'react';
import { Link } from 'react-router-dom'

const About = () => {
  return <div>
    <div style={{paddingBottom: '15px'}}>
      this is the about page. There's nothing about this.
    </div>
    <div>
      <Link to="/">back home</Link>
    </div>
  </div>
}

export default About;