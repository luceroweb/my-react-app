import { Button } from "react-bootstrap";

export const Pagination = ({ totalResults, currentPage, setCurrentPage }) => {
  // convert page count to array
  const pageCount = (totalResults) ? Math.ceil(totalResults / 10) : [];
  const pageCountArr = [];
  for(let i = 0; i < pageCount; i++){
    pageCountArr.push({ count: i+1 })
  }

  // Reduce padding to improve mobile layout
  const narrowPadding = {paddingLeft:'0.2em',paddingRight:'0.2em'};

  // Build pagination options
  const previous =  [
    <Button 
      key="previous" 
      disabled={currentPage === 1} 
      onClick={() => setCurrentPage(currentPage - 1)} 
      style={narrowPadding}
    >
      &lt;
    </Button>
  ];

  const startingPages = pageCountArr.slice(0, 1);

  const firstThreeDots = (currentPage > 3) ? 
    [
    <Button 
      key="firstThreeDots" 
      disabled 
      style={narrowPadding}
    >
      ...
    </Button>
    ] 
  : [];

  const middlePages = (currentPage > 0) ? 
    pageCountArr.slice(Math.max(currentPage - 2,1), Math.min(currentPage + 1,pageCount - 1)) 
    : [];

  const lastThreeDots = (currentPage < pageCount-2) ? 
    [
      <Button 
        key="lastThreeDots" 
        disabled 
        style={narrowPadding}
      >
        ...
      </Button>
    ] 
  : [];

  const endingPages = pageCountArr.slice(-1);
  
  const next =  [
    <Button 
      key="next" 
      disabled={currentPage === pageCount} 
      onClick={() => setCurrentPage(currentPage + 1)} 
      style={narrowPadding}
    >
      &gt;
    </Button>
  ];

  // Build pagination buttons
  const buildPageList = (arr) => {
    return arr.map(({count}) => (
      <Button
        key={count}
        disabled={count === currentPage}
        onClick={() => setCurrentPage(count)}
      >
        {count}
      </Button>
    ))
  }

  let limitedPageCount = [].concat(
    previous,
    buildPageList(startingPages),
    firstThreeDots,
    buildPageList(middlePages),
    lastThreeDots,
    buildPageList(endingPages),
    next,
  );

  let allPageCount = [].concat(
    previous,
    buildPageList(pageCountArr),
    next,
  );

  return (
    <div className="text-center">
      { (pageCount > 1) &&
        <p>Page {currentPage} of {pageCount}</p>
      }
      { (pageCount > 1) &&
        ( pageCount > 7 ? limitedPageCount : allPageCount )
      }
    </div>
  )
}

export default Pagination;