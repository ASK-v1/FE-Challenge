import { useState } from 'react';
import '../styles/news.css';

export default function News() {
  const mockNews = [
    './news.png',
    'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    '1h ago · by Troy Corlson',
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="news">
      <h1 className="news-title">Top news</h1>

      <button onClick={() => setIndex(0)} className="prev">
        <img className="l-f-img" width={14} src="./left.png" alt="left" />
      </button>
      <button onClick={() => setIndex(1)} className="next">
        <img width={14} src="./right.png" alt="right" />
      </button>

      <div className="news-slider">
        <div
          className="slideshow-slider"
          style={{ transform: `translate3d(${-index * 25.5}%, 0, 0)` }}
        >
          <div>
            <img className="slide" src={mockNews[0]} alt="news" width={327} height={195} />
            <h1 className="news-mock-text">{mockNews[1]}</h1>
            <h1 className="news-mock-time">{mockNews[2]}</h1>
          </div>
          <div>
            <img className="slide" src={mockNews[0]} alt="news" width={327} height={195} />
            <h1 className="news-mock-text">{mockNews[1]}</h1>
            <h1 className="news-mock-time">{mockNews[2]}</h1>
          </div>
          <div>
            <img className="slide" src={mockNews[0]} alt="news" width={327} height={195} />
            <h1 className="news-mock-text">{mockNews[1]}</h1>
            <h1 className="news-mock-time">{mockNews[2]}</h1>
          </div>
          <div>
            <img className="slide" src={mockNews[0]} alt="news" width={327} height={195} />
            <h1 className="news-mock-text">{mockNews[1]}</h1>
            <h1 className="news-mock-time">{mockNews[2]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
