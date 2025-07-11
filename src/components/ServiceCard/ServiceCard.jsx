import "./ServiceCard.scss"

function ServiceCard({Icon, service}) {

  return (
    <div className="card">
        <div className="card__content">
            <Icon className="card__icon"/>
            <h1 className="card__title title-text">{service.title}</h1>
            <ul className="card__list">
                {service.bulletPoints.map((point, index) => <li key={index} className="card__list-item p-text p-text--500"><span className="card__list-item-bar">{point}</span></li>)}
            </ul>
        </div>
    </div>
  )
}

export default ServiceCard