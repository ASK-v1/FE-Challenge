import { useEffect } from 'react';
import '../styles/pagination.css';

export default function Pagination({ results, currentPage, setCurrentPage, page, setPage }) {
  useEffect(() => {
    if (results.length <= 5) {
      setPage(1);
    } else {
      setPage(Math.ceil(results.length / 5));
    }
    setCurrentPage(1);
  }, [results]);

  const pageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      {currentPage !== 1 ? (
        <button onClick={() => setCurrentPage(currentPage - 1)} className="pagination-prev">
          Previous
        </button>
      ) : (
        <button className="pagination-prev">Previous</button>
      )}

      {page <= 6 ? (
        Array.from(Array(page).keys()).map((p) => (
          <button
            key={p}
            onClick={() => pageClick(p + 1)}
            className={currentPage === p + 1 ? 'pagination-items-active' : 'pagination-items'}
          >
            {p + 1}
          </button>
        ))
      ) : (
        <div className="pagination-item">
          <button
            onClick={() => pageClick(1)}
            className={currentPage === 1 ? 'pagination-items-active' : 'pagination-items'}
          >
            1
          </button>

          {(currentPage > 4 || currentPage > page - 2) && <h1 className="pagination-dots">...</h1>}

          {currentPage <= 3 && (
            <button
              onClick={() => pageClick(2)}
              className={currentPage === 2 ? 'pagination-items-active' : 'pagination-items'}
            >
              2
            </button>
          )}
          {currentPage <= 3 && (
            <button
              onClick={() => pageClick(3)}
              className={currentPage === 3 ? 'pagination-items-active' : 'pagination-items'}
            >
              3
            </button>
          )}

          {currentPage <= 4 && <h1 className="pagination-dots">...</h1>}

          {(currentPage === 4 || currentPage === 5) && (
            <button
              onClick={() => pageClick(4)}
              className={currentPage === 4 ? 'pagination-items-active' : 'pagination-items'}
            >
              4
            </button>
          )}

          {(currentPage === 4 || currentPage === 5 || currentPage === 6) && (
            <button
              onClick={() => pageClick(5)}
              className={currentPage === 5 ? 'pagination-items-active' : 'pagination-items'}
            >
              5
            </button>
          )}

          {(currentPage === 4 || currentPage === 5 || currentPage === 6 || currentPage === 7) && (
            <button
              onClick={() => pageClick(6)}
              className={currentPage === 6 ? 'pagination-items-active' : 'pagination-items'}
            >
              6
            </button>
          )}
          {(currentPage === 6 || currentPage === 7 || currentPage === 8) && page > 7 && (
            <button
              onClick={() => pageClick(7)}
              className={currentPage === 7 ? 'pagination-items-active' : 'pagination-items'}
            >
              7
            </button>
          )}
          {(currentPage === 7 || currentPage === 8 || currentPage === 9) && page > 8 && (
            <button
              onClick={() => pageClick(8)}
              className={currentPage === 8 ? 'pagination-items-active' : 'pagination-items'}
            >
              8
            </button>
          )}
          {(currentPage === 8 || currentPage === 9 || currentPage === 10) && page > 9 && (
            <button
              onClick={() => pageClick(9)}
              className={currentPage === 9 ? 'pagination-items-active' : 'pagination-items'}
            >
              9
            </button>
          )}
          {(currentPage === 9 || currentPage === 10 || currentPage === 11) && page > 10 && (
            <button
              onClick={() => pageClick(10)}
              className={currentPage === 10 ? 'pagination-items-active' : 'pagination-items'}
            >
              10
            </button>
          )}
          {(currentPage === 10 || currentPage === 11 || currentPage === 12) && page > 11 && (
            <button
              onClick={() => pageClick(11)}
              className={currentPage === 11 ? 'pagination-items-active' : 'pagination-items'}
            >
              11
            </button>
          )}
          {(currentPage === 11 || currentPage === 12 || currentPage === 13) && page > 12 && (
            <button
              onClick={() => pageClick(12)}
              className={currentPage === 12 ? 'pagination-items-active' : 'pagination-items'}
            >
              12
            </button>
          )}
          {(currentPage === 12 || currentPage === 13 || currentPage === 14) && page > 13 && (
            <button
              onClick={() => pageClick(13)}
              className={currentPage === 13 ? 'pagination-items-active' : 'pagination-items'}
            >
              13
            </button>
          )}
          {(currentPage === 13 || currentPage === 14 || currentPage === 15) && page > 14 && (
            <button
              onClick={() => pageClick(14)}
              className={currentPage === 14 ? 'pagination-items-active' : 'pagination-items'}
            >
              14
            </button>
          )}
          {(currentPage === 14 || currentPage === 15 || currentPage === 16) && page > 15 && (
            <button
              onClick={() => pageClick(15)}
              className={currentPage === 15 ? 'pagination-items-active' : 'pagination-items'}
            >
              15
            </button>
          )}
          {(currentPage === 15 || currentPage === 16 || currentPage === 17) && page > 16 && (
            <button
              onClick={() => pageClick(16)}
              className={currentPage === 16 ? 'pagination-items-active' : 'pagination-items'}
            >
              16
            </button>
          )}
          {(currentPage === 16 || currentPage === 17 || currentPage === 18) && page > 17 && (
            <button
              onClick={() => pageClick(17)}
              className={currentPage === 17 ? 'pagination-items-active' : 'pagination-items'}
            >
              17
            </button>
          )}
          {(currentPage === 17 || currentPage === 18 || currentPage === 19) && page > 18 && (
            <button
              onClick={() => pageClick(18)}
              className={currentPage === 18 ? 'pagination-items-active' : 'pagination-items'}
            >
              18
            </button>
          )}
          {(currentPage === 18 || currentPage === 19 || currentPage === 20) && page > 19 && (
            <button
              onClick={() => pageClick(19)}
              className={currentPage === 19 ? 'pagination-items-active' : 'pagination-items'}
            >
              19
            </button>
          )}
          {(currentPage === 19 || currentPage === 20 || currentPage === 21) && page > 20 && (
            <button
              onClick={() => pageClick(20)}
              className={currentPage === 20 ? 'pagination-items-active' : 'pagination-items'}
            >
              20
            </button>
          )}

          {currentPage < 4 && (
            <button
              onClick={() => pageClick(page - 2)}
              className={currentPage === page - 2 ? 'pagination-items-active' : 'pagination-items'}
            >
              {page - 2}
            </button>
          )}

          {currentPage < 4 && (
            <button
              onClick={() => pageClick(page - 1)}
              className={currentPage === page - 1 ? 'pagination-items-active' : 'pagination-items'}
            >
              {page - 1}
            </button>
          )}

          {(currentPage < page - 3 || currentPage < page - 2) && currentPage > 3 && (
            <h1 className="pagination-dots">...</h1>
          )}

          <button
            onClick={() => pageClick(page)}
            className={currentPage === page ? 'pagination-items-active' : 'pagination-items'}
          >
            {page}
          </button>
        </div>
      )}

      {page === currentPage ? (
        <button className="pagination-next">Next</button>
      ) : (
        <button onClick={() => setCurrentPage(currentPage + 1)} className="pagination-next">
          Next
        </button>
      )}
    </div>
  );
}
