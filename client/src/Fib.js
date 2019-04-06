import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, [index]);

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    const res = values.data;
    console.log('VALUES RES => ', res);
    setValues(res);
  };

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get('/api/values/all');
    const res = seenIndexes.data;
    console.log('INDEXES RES => ', res);
    setSeenIndexes(res);
  };

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }) => number).join(', ');
  }

  const handleSubmit = async event => {
    event.preventDefault();
    await axios.post('/api/values', {
      index: index
    });
    setIndex('');
  }

  const renderValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          for index {key} I calculated value {values[key]}
        </div>
      )
    }

    return entries;
  }

  return <div>
    <div style={{paddingBottom: '15px'}}>
      <Link to="/about">go to about page</Link>
    </div>
    <h1>Calculate Fibonacci numbers</h1>
    <form onSubmit={handleSubmit}>
      <label>enter index:</label>
      <input
        type="text"
        value={index}
        onChange={e => setIndex(e.target.value)}
      />
      <button>Submit</button>

      <h3>used indexes:</h3>
        <div>{renderSeenIndexes()}</div>
      <h3>calculated values:</h3>
        <div>{renderValues()}</div>
      </form>
  </div>
}

export default Fib;