import React from 'react'
import { StyledLoaderDot, StyledLoaderWrapper, StyledPageOverlay, StyledPageLoader} from './Loader.styled'

const Loader = ({show}) => {
  if(!show) return
  return (
    <StyledLoaderWrapper>
        <StyledPageOverlay />
        <StyledPageLoader>
          <StyledLoaderDot />
          <StyledLoaderDot $delay=".16s"/>
          <StyledLoaderDot $delay=".32s"/>
        </StyledPageLoader>
    </StyledLoaderWrapper>

  )
}

export default Loader
