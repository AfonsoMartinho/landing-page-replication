import React from 'react';
import { StyledCard, StyledCardLink, StyledCardMedia, StyleCardImage, StyleCardLabel, StyledCardH5 } from './Card.styled'

const Card = ({card}) => {
  if(!card || !card.title) return(<></>)
  const { image, label, title, content, link } = card

  return (
    <StyledCard>
      <StyledCardLink traget={link.target} href={link.url}>
        <StyledCardMedia>
          <StyleCardImage {...image} />
        </StyledCardMedia>
      </StyledCardLink>

      <StyledCardLink traget={link.target} href={link.url}>
        <span title={label.text}>
          <StyleCardLabel>{label.text}</StyleCardLabel>
        </span>

        <StyledCardH5 className='card__title'>
          {title}
        </StyledCardH5>

        <div className="card__content">{content?.text}</div>
      </StyledCardLink>
      
    </StyledCard >
  )
}

export default Card
