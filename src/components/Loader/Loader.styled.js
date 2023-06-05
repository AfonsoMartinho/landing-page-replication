import styled from 'styled-components'

export const StyledLoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export const StyledPageOverlay = styled.div `
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.5;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 100;
`

export const StyledPageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 101;
`

export const StyledLoaderDot = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 1.125rem;
  height: 1.125rem;
  margin: 0 0.5625rem;
  border-radius: 100%;
  display: inline-block;
  animation: pageLoader 1s ease-in-out infinite both;
  animation-delay: ${({ $delay }) => $delay};



  @keyframes pageLoader {
    0%,80%,to {
        transform: scale(.6)
    }

    40% {
        transform: scale(1)
    }
}
`