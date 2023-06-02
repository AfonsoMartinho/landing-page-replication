import { useEffect, useState } from 'react';

import Card from '../components/Card/Card';
import Dropdown from '../components/Dropdown/Dropdown';
import { StyledRow, StyledCol } from '../styles/GridSystem.styled'
import Pagination from '../components/Pagination/Pagination';
import { useGetCardsQuery } from '../services/cardsService';
import { costumerIndustries, costumerRegions, costumerIntegrations } from '../constants/costumerFilters'


import styled from "styled-components";

// The wrapper component styles
const StyledCostumersWrapper = styled(StyledCol)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1% 0 1%;
  max-width: 1920px;
`;

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
    <StyledCostumersWrapper colSize={12} sm={10} offsetSm={1}>
      <StyledRow>
        <StyledCol>
          <section id="costumer-fields" style={{ marginBottom: '2rem' }}>
            <StyledRow>
              <StyledCol colSize={12} sm={4}>
                <Dropdown options={costumerIndustries} title="All Industries" onFieldsChange={(val) => setCurrentIndustry(val)}/>
              </StyledCol>
              <StyledCol colSize={12} sm={4}>  
                <Dropdown options={costumerIntegrations} title="All Integrations" onFieldsChange={(val) => setCurrentIntegration(val)}/>
              </StyledCol>
              <StyledCol colSize={12} sm={4}>
                <Dropdown options={costumerRegions} title="All Regions" onFieldsChange={(val) => setCurrentRegion(val)}/>
              </StyledCol>
            </StyledRow>
          </section>
          <section id="costumers">
            <StyledRow  style={{ position: 'relative' }}>
              {(!isLoading && !isFetching && !isError) && 
                cardsList && (
                    cardsList.map((card,i) => (
                      <StyledCol colSize={12} sm={6} md={6} lg={6} xl={3}>
                        <Card key={`${card.title}-${i}`} card={card}/>
                      </StyledCol>
                    ))
                  )}
                  {(cardsList.length === 0) && (
                    <h1>EMPTY</h1>
                  )}
              { (isLoading || isFetching) && (
                <div>loading...</div>
              )}
              
              { isError && (
                <div>{error}</div>
              )}
            </StyledRow>
          </section>
          <div style={{ marginInline: '10%' }}>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={cardListSize}
              pageSize={20}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </StyledCol>
      </StyledRow>
    </StyledCostumersWrapper>
  );
}

export default Costumers;
