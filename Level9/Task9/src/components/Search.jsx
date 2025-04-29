import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('term') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');

  useEffect(() => {
    setSearchParams({ term, category });
  }, [term, category, setSearchParams]);

  const handleTermChange = useCallback((e) => setTerm(e.target.value), []);
  const handleCategoryChange = useCallback((e) => setCategory(e.target.value), []);

  return (
    <div>
      <input value={term} onChange={handleTermChange} placeholder="Search term" />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="tech">Tech</option>
        <option value="fashion">Fashion</option>
      </select>
    </div>
  );
}

export default React.memo(Search);
