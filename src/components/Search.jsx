import { useEffect, useState } from 'react';
import '../styles/search.css';
import mockData from '../mockData.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Search() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState('');

  const dispatch = useDispatch();

  const searchData = () => {
    const data = mockData.data.filter((mock) =>
      mock[0].toLowerCase().includes(value.toLowerCase()),
    );
    setResults(data);

    dispatch({ type: 'SET_DATA', data });
    dispatch({ type: 'SET_SEARCHING', value });
  };

  useEffect(() => {
    searchData();
  });

  const navigate = useNavigate();
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

        <button onClick={() => navigate('/results')} className="search-button">
          Search
        </button>
      </div>

      {value && (
        <div className="search-results">
          {results.slice(0, 3).map((m, index) => (
            <div key={index} className="search-results-text">
              <img
                src="./mark.png"
                className="search-results-mark"
                alt="search_mark"
                width={18}
                height={22}
              />
              <div className="search-results-u-l">
                <div className="search-results-u-l-upper">{m[0]}</div>
                <div className="search-results-u-l-lower">
                  {m[4]}, {m[5]}
                </div>
              </div>
            </div>
          ))}

          {results.length > 3 && (
            <button onClick={() => navigate('/results')} className="search-results-more">
              Show more...
            </button>
          )}
          {results.length === 0 && <h1 className="search-results-notfound">Record not found</h1>}
        </div>
      )}
    </div>
  );
}
