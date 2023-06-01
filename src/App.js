import { useState } from 'react';

import Card from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import Grid from './components/Grid/Grid';
import Pagination from './components/Pagination/Pagination';
import { useGetCardsQuery } from './services/cardsService';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: cards = {},
    isLoading,
    isFetching,
    isError,
    error,
  }  = useGetCardsQuery({page: currentPage});

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }
  
  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  const cardsList = cards.list || [];
  const cardListSize = cards.size || 0;

  console.log(cards)

  return (
    <div className="App">

      <div style={{ paddingBlock: '25px' }}></div>

      <section style={{ marginInline: '10%' }}>
        <Dropdown />
      </section>

      <div style={{ paddingBlock: '25px' }}></div>
      
      <Grid>
      {cardsList.map((card,i) => (
        <Card key={`${card.title}-${i}`} card={card}/>
      ))}
      </Grid>
      <div style={{ paddingBlock: '25px' }}></div>

      <div style={{ marginInline: '10%' }}>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={cardListSize}
          pageSize={20}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>

      <div style={{ paddingBlock: '25px' }}></div>
    </div>
  );
}

export default App;
