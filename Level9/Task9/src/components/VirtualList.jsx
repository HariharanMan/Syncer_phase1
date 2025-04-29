import React, { useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../utils/fakeApi';

function VirtualList() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get('term')?.toLowerCase() || '';
  const category = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    return getProducts().filter(p =>
      (!term || p.name.toLowerCase().includes(term)) &&
      (!category || p.category === category)
    );
  }, [term, category]);

  const Row = ({ index, style }) => (
    <div style={style}>
      {filtered[index].name} - <em>{filtered[index].category}</em>
    </div>
  );

  return (
    <div style={{ marginTop: '20px', height: '400px', width: '60%', margin: 'auto' }}>
      <List
        height={400}
        itemCount={filtered.length}
        itemSize={35}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}

export default React.memo(VirtualList);
