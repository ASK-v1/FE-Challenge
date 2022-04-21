import { useEffect, useState } from 'react';
import '../styles/search.css';
import mockData from '../mockData.json';

export default function Search() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState('');

  const searchData = () => {
    const data = mockData.data.filter((mock) =>
      mock[0].toLowerCase().includes(value.toLowerCase()),
    );
    setResults(data);
  };

  useEffect(() => {
    searchData();
  }, [value]);

  return (
    <div className="search">
      <h1 className="title">Find in records</h1>
      <div className="search-bar">
        <div className="search-container">
          <input
            onChange={(event) => setValue(event.target.value)}
            type="search"
            className="search-input"
            id="input"
          />
          <img src="./search.png" className="search-image" alt="search_image" />
        </div>
        <button className="search-button">Search</button>
      </div>

      {value && (
        <div className="search-results">
          {results.slice(0, 3).map((m, index) => (
            <div key={index} className="search-results-text">
              <img src="./mark.png" className="search-results-mark" alt="search_mark" width={20} />
              <div className="search-results-u-l">
                <div className="search-results-u-l-upper">{m[0]}</div>
                <div className="search-results-u-l-lower">
                  {m[4]}, {m[5]}
                </div>
              </div>
            </div>
          ))}

          {results.length > 3 && <button className="search-results-more">Show more...</button>}
          {results.length === 0 && <h1 className="search-results-notfound">Record not found</h1>}
        </div>
      )}
    </div>
  );
}
