import { useEffect, useState } from 'react';

import { useGetCardsQuery } from '../services/cardsService';
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader'
import { costumerIndustries, costumerRegions, costumerIntegrations } from '../constants/costumerFilters'
import { StyledRow, StyledCol } from '../styles/GridSystem.styled'


import styled from "styled-components";

// The Costumer wrapper component styled
const StyledCostumersWrapper = styled(StyledCol)`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 1% 0 1%;
  max-width: 1920px;

  @media(max-width: ${props => props.theme.breakpoints.sm}) {
    padding-right:1.5rem;
    padding-left: 1.5rem
  }
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
  const pageSize = 20;


  useEffect(() => {
    setCurrentPage(1)
  }, [currentIndustry, currentIntegration, currentRegion])

  // renders the cards list or mock data while handling the loader logic
  const CardsList = () => {
    if (cardsList.length !== 0) {
      return (
      <>
        {(cardsList.map((card,i) => (
          <StyledCol colSize={12} sm={6} md={6} lg={6} xl={3}>
            <Card key={`${card.title}-${i}`} card={card}/>
          </StyledCol>
        )))}
        <Loader show={isFetching || isLoading} />
      </>
    )} else { 
      // this will display before we fetch any data
      // TODO use mock cards data here
      return (
        <>
          {Array.from({ length: 20 }, (data, i) => (
            <StyledCol colSize={12} sm={6} md={6} lg={6} xl={3}>
              <Card key={`Lazycard-${i}`} card={data}/> 
            </StyledCol>
          ))}
          <Loader show={true}/>
        </>
      )
    }
  }

  return (
    <StyledCostumersWrapper>
      <StyledRow>
        <StyledCol offsetSm={1} colSize={12} sm={10}>
          <StyledRow>
            <StyledCol> 
              <StyledRow as="section" id="costumer-fields" style={{ marginBottom: '2rem' }}>
                <StyledCol colSize={12} sm={4}>
                  <Dropdown options={costumerIndustries} title="All Industries" onFieldsChange={(val) => setCurrentIndustry(val)}/>
                </StyledCol>
                <StyledCol colSize={12} sm={4}>
                  <Dropdown options={costumerRegions} title="All Regions" onFieldsChange={(val) => setCurrentRegion(val)}/>
                </StyledCol>
                <StyledCol colSize={12} sm={4}>  
                  <Dropdown options={costumerIntegrations} title="All Integrations" onFieldsChange={(val) => setCurrentIntegration(val)}/>
                </StyledCol>
              </StyledRow>
              <StyledRow as="section" id="costumers"  style={{ position: 'relative' }}>
                { !isError ? (
                  <CardsList />
                ) : (
                  <div>{error}</div>
                )}
              </StyledRow>
            </StyledCol>
          </StyledRow>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={cardListSize}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </StyledCol>
      </StyledRow>
    </StyledCostumersWrapper>
  );
}

export default Costumers;
