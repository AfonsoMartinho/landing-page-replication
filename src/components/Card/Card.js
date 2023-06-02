import clsx from 'clsx'

import './Card.css'

const Card = ({className, card}) => {
  const { image, label, title, content } = card
  return (
    <div
      className={clsx("card card__link", className)}
    >
      <div className="card__media">
        <img {...image} />
      </div>

      <div className={clsx('card__text -margin-top-16')}>
        <span className="-margin-bottom-4" >
          {label.text}
        </span>

        <h5 className="card__title -margin-bottom-4 -margin-bottom-sm-6 -margin-bottom-md-4 -margin-bottom-xl-6" >
          {title}
        </h5>

        <p className="card__description text text--16">{content?.text}</p>
      </div>
    </div >
  )
}

export default Card
