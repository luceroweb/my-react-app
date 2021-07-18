import React from "react";

const Pagination = ({ totalResults, selectedPage, setSelectedPage }) => {

  const pageCount = (totalResults) ? Math.ceil(totalResults / 10) : [];

  const firstPage = () => {
    return ((selectedPage + 1) > 1) ? 
      <li className="page-item" key="firstPage"><button className="page-link" tabIndex="-1" onClick={() => setSelectedPage(0)}>&lt;&lt;</button></li>
    : 
      <li className="page-item disabled" key="firstPage"><button className="page-link" tabIndex="-1">&lt;&lt;</button></li>
    ;
  }

  const previous = () => {
    return ((selectedPage + 1) > 1) ? 
      <li className="page-item" key="previous"><button className="page-link" tabIndex="-1" onClick={() => setSelectedPage(selectedPage - 1)}>Previous</button></li>
    : 
      <li className="page-item disabled" key="previous"><button className="page-link" tabIndex="-1">Previous</button></li>
    ;
  }

  const pages = () => {
    return [...Array(pageCount)].map((page,index) => {
      const pageNumber = () => {
        const pagesBefore = (pageCount > 5) ? selectedPage - 2 : 0;
        const pagesAfter = (pageCount > 5) ? selectedPage + 2 : pageCount;
        if(index >= pagesBefore && index <= pagesAfter) {
          const pageItemClass = (index === selectedPage) ? 'page-item active' : 'page-item' ;
          return <li className={pageItemClass} key={index}><button className="page-link" onClick={() => setSelectedPage(index)}>{index+1}</button></li>;
        }
      }
      return pageNumber(index);
    })
  }

  const next = () => {
    return (selectedPage < (pageCount -1)) ? 
      <li className="page-item" key="Next"><button className="page-link" onClick={() => setSelectedPage(selectedPage + 1)}>Next</button></li>
    : 
      <li className="page-item disabled" key="Next"><button className="page-link">Next</button></li>
    ;
  }

  const lastPage = () => {
    return (selectedPage < (pageCount -1)) ? 
      <li className="page-item" key="lastPage"><button className="page-link" onClick={() => setSelectedPage((pageCount -1))}>&gt;&gt;</button></li>
    : 
      <li className="page-item disabled" key="lastPage"><button className="page-link">&gt;&gt;</button></li>
    ;
  }

  return pageCount > 1 ? (
    <div className="row">
      <div className="col text-center">
        <nav className="text-center d-inline-block" aria-label="Page navigation">
          <ul className="pagination">
            { firstPage() }
            { previous() }
            { pages() }
            { next() }
            { lastPage() }
          </ul>
        </nav>
      </div>
    </div>
  ): null;
}

export default Pagination;