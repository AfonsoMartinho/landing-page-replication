import { useEffect, useState } from 'react';
import { useGetCardsQuery } from '../services/cardsService';
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader'
import { costumerIndustries, costumerRegions, costumerIntegrations } from '../constants/costumerFilters'
import { StyledRow, StyledCol } from '../styles/GridSystem.styled'
import mockCards from '../mockData/CardsList.data.json'
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

// adding margin bottom on costumer fields wrapper
const StyledCostumersFields = styled(StyledRow) `
  margin-bottom: 2rem;
`

/**
 * Costumers React Component view
 * Used for rendering costumers page
 * fetches cards list with useGetCardsQuery()
 * Handles pagination and api errors
 * @returns jsx element containing costumers filters dropdowns and cards List
 */
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

  // renders the cards list or mock data if no cards list available
  // handling the loader logic
  const CardsList = () => {
    const listToRender = (cardsList.length !== 0) ? cardsList : mockCards;
      return (
      <>
        {(listToRender.map((card,i) => (
          <StyledCol colSize={12} sm={6} md={6} lg={6} xl={3}  key={`${card.title}-${i}`}>
            <Card card={card}/>
          </StyledCol>
        )))}
        <Loader show={(cardsList.length !== 0) ? (isFetching || isLoading) : true} />
      </>
    )
  }

  return (
    <StyledCostumersWrapper>
      <StyledRow>
        <StyledCol offsetSm={1} colSize={12} sm={10}>
          <StyledRow>
            <StyledCol> 
              <StyledCostumersFields as="section" id="costumer-fields">
                <StyledCol colSize={12} sm={4}>
                  <Dropdown options={costumerIndustries} title="All Industries" onFieldsChange={(val) => setCurrentIndustry(val)}/>
                </StyledCol>
                <StyledCol colSize={12} sm={4}>
                  <Dropdown options={costumerRegions} title="All Regions" onFieldsChange={(val) => setCurrentRegion(val)}/>
                </StyledCol>
                <StyledCol colSize={12} sm={4}>  
                  <Dropdown options={costumerIntegrations} title="All Integrations" onFieldsChange={(val) => setCurrentIntegration(val)}/>
                </StyledCol>
              </StyledCostumersFields>
              <StyledRow as="section" id="customers">
                {!isError ? <CardsList /> : <div>{error.data.message}</div>}
              </StyledRow>
            </StyledCol>
          </StyledRow>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={cardListSize}
            pageSize={20}
            onPageChange={page => setCurrentPage(page)} />
        </StyledCol>
      </StyledRow>
    </StyledCostumersWrapper>
  );
}

export default Costumers;
