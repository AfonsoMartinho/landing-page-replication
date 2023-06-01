import { useEffect, useState } from 'react';

import Card from '../components/Card/Card';
import Dropdown from '../components/Dropdown/Dropdown';
import Grid from '../components/Grid/Grid';
import Pagination from '../components/Pagination/Pagination';
import { useGetCardsQuery } from '../services/cardsService';
import { costumerIndustries, costumerRegions, costumerIntegrations } from '../constants/costumerFilters'

import '../App.css';

function Costumers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentIndustry, setCurrentIndustry] = useState('');
  const [currentRegion, setCurrentRegion] = useState('');
  const [currentIntegration, setCurrentIntegration] = useState('');
  const {
    data: cards = {},
    isLoading,
    isFetching,
    isError,
    error,
  }  = useGetCardsQuery({page: currentPage, industry: currentIndustry, region: currentRegion, integration: currentIntegration});

  const cardsList = cards.list || [];
  const cardListSize = cards.size || 0;

  useEffect(() => {
    setCurrentPage(1)
  }, [currentIndustry, currentIntegration, currentRegion])
  

  return (
    <div className="costumers">

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between'}}>
        <Dropdown options={costumerIndustries} title="All Industries" onFieldsChange={(val) => setCurrentIndustry(val)}/>
        <Dropdown options={costumerIntegrations} title="All Integrations" onFieldsChange={(val) => setCurrentIntegration(val)}/>
        <Dropdown options={costumerRegions} title="All Regions" onFieldsChange={(val) => setCurrentRegion(val)}/>
      </div>

      <div style={{ paddingBlock: '25px' }}></div>
      {(!isLoading && !isFetching && !isError) && (
        <Grid>
          { cardsList && (
            cardsList.map((card,i) => (
              <Card key={`${card.title}-${i}`} card={card}/>
            ))
          )}
          {(cardsList.length === 0) && (
            <h1>EMPTY</h1>
          )}
        </Grid>
      )}
      { (isLoading || isFetching) && (
        <div>loading...</div>
      )}
      
      { isError && (
        <div>{error}</div>
      )}
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

    </div>
  );
}

export default Costumers;
