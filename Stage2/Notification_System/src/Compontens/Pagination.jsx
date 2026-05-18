function Pagination({ page, totalPages, onChangePage }) {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={pageNumber === page ? 'active' : ''}
          onClick={() => onChangePage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
