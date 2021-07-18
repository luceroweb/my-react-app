import React from "react";

const Pagination = ({ totalResults, selectedPage, setSelectedPage }) => {

  const pageCount = (totalResults) ? Math.ceil(totalResults / 10) : [];

  const previous = () => {
    return ((selectedPage + 1) > 1) ? 
      <li className="page-item" key="previous"><a class="page-link" href="javascript:null(void)" tabindex="-1" onClick={() => setSelectedPage(selectedPage - 1)}>Previous</a></li>
    : 
      <li className="page-item disabled" key="previous"><a class="page-link" href="javascript:null(void)" tabindex="-1">Previous</a></li>
    ;
  }

  const next = () => {
    return (selectedPage < (pageCount -1)) ? 
      <li className="page-item" key="Next"><a class="page-link" href="javascript:null(void)" onClick={() => setSelectedPage(selectedPage + 1)}>Next</a></li>
    : 
      <li className="page-item disabled" key="Next"><a class="page-link" href="javascript:null(void)">Next</a></li>
    ;
  }

  return pageCount > 1 ? (
    <nav className="text-center" aria-label="Page navigation">
      <ul className="pagination">
        { previous() }
        {
          [...Array(pageCount)].map((page,index) => {
            const pageItemClass = index === selectedPage?'page-item active':'page-item';
            return <li className={pageItemClass} key={index}><a className="page-link" href="javascript:null(void)" onClick={() => setSelectedPage(index)}>{index+1}</a></li>
          })
        }
        { next() }
      </ul>
    </nav>
  ): null;
}

export default Pagination;