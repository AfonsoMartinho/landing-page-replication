import React from 'react'
import { StyledLoaderDot, StyledLoaderWrapper, StyledPageOverlay, StyledPageLoader} from './Loader.styled'


/**
 * Loader Component
 * @param {{show: boolean}} props (used to boolean render the componet)
 * @returns a jsx component the overlays the parent relative wrapper
 *  contains three dot divs that animate with a delay in between each
 */
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
