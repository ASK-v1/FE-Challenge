import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/results.css';
import mockData from '../mockData.json';

export default function Results() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.mockData);
  const search = useSelector((state) => state.data.searching);
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const url = window.location.href.slice(21);
  const [results, setResults] = useState();

  const [order, setOrder] = useState({
    nameAscending: false,
    nameDescending: false,
    yearAscending: false,
    yearDescending: false,
  });

  const handleClick = (props) => {
    setOrder({
      nameAscending: false,
      nameDescending: false,
      yearAscending: false,
      yearDescending: false,
      [props]: true,
    });
  };

  useEffect(() => {
    dispatch({ type: 'PREV_URL', url });
    setValue(search);
    if (!data.length) {
      setResults(mockData.data);
    } else setResults(data);
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [open]);

  useEffect(() => {
    if (results) {
      if (order.nameAscending) {
        results.sort((a, b) => a[0].localeCompare(b[0]));
      } else if (order.nameDescending) {
        results.sort((a, b) => a[0].localeCompare(b[0])).reverse();
      } else if (order.yearAscending) {
        results.map((d, i) => {
          results[i].push(new Date(d[3].split('/').reverse()).getTime());
        });
        results.sort((a, b) => a[6] - b[6]);
      } else if (order.yearDescending) {
        results.map((d, i) => {
          results[i].push(new Date(d[3].split('/').reverse()).getTime());
        });
        results.sort((a, b) => a[6] - b[6]).reverse();
      }
    }
    setOpen(false);
    console.log(results);
  }, [order.nameDescending, order.nameAscending, order.yearDescending, order.yearAscending]);

  const searchData = () => {
    setOrder({
      nameAscending: false,
      nameDescending: false,
      yearAscending: false,
      yearDescending: false,
    });
    const data = mockData.data.filter((mock) =>
      mock[0].toLowerCase().includes(value.toLowerCase()),
    );
    setResults(data);
  };

  return (
    <div className="results">
      <div className="results-nav">
        <div onClick={() => navigate('/')} className="results-logo" />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="search"
          className="results-input"
          id="input"
        />
        <button onClick={() => searchData()} className="results-search">
          Search
        </button>
        <button onClick={() => navigate('/add')} className="results-add">
          Add new record
        </button>
        <button onClick={() => setOpen(true)} className="results-order">
          <img src="./order.png" alt="order" />
          Order By
        </button>
        {open && (
          <div ref={ref} className="results-open">
            <h1
              onClick={() => handleClick('nameAscending')}
              className={order.nameAscending ? 'results-open-items-active' : 'results-open-items'}
            >
              Name ascending
            </h1>
            <h1
              onClick={() => handleClick('nameDescending')}
              className={order.nameDescending ? 'results-open-items-active' : 'results-open-items'}
            >
              Name descending
            </h1>
            <h1
              onClick={() => handleClick('yearAscending')}
              className={order.yearAscending ? 'results-open-items-active' : 'results-open-items'}
            >
              Year ascending
            </h1>
            <h1
              onClick={() => handleClick('yearDescending')}
              className={order.yearDescending ? 'results-open-items-active' : 'results-open-items'}
            >
              Year descending
            </h1>
          </div>
        )}
      </div>
      {results && results.length ? (
        results.slice(0, 5).map((result, index) => (
          <div key={index} className="results-body">
            <div className="results-body-items">
              <div className="results-body-items-left">
                <img src="./mark.png" alt="mark" width={18} height={22} />
                <div className="results-body-items-left-text">
                  <h1 className="results-body-items-left-text-upper">{result[1]}</h1>
                  <h1 className="results-body-items-left-text-lower">
                    {result[4]}, {result[5]}
                  </h1>
                </div>
              </div>
              <div className="results-body-items-right">
                <h1 className="results-body-items-right-upper">{result[0]}</h1>
                <h1 className="results-body-items-right-lower">{result[3]}</h1>
              </div>
            </div>
            {results.length >= 5
              ? index !== 4 && <div className="results-body-line" />
              : index !== results.length - 1 && <div className="results-body-line" />}
          </div>
        ))
      ) : (
        <h1 className="results-not-found">Record not found</h1>
      )}
      <div className="results-pagination"></div>
    </div>
  );
}
