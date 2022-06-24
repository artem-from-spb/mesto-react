import bin from "../images/recycle-bin.svg";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
      <img src={bin} alt="Корзина" className="card__recycle-bin" id="bin" />

      <img
        src={card.link}
        className="card__image"
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-section">
          <button type="button" className="card__button-like" />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
