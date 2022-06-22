import edit from "../images/edit.svg";
import plus from "../images/plus.svg";
import { api } from "../utils/Api";
import React from "react";
import bin from '../images/recycle-bin.svg'

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => alert(err));
  });

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards([res]);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main>
      {"{"}/* Кусто */{"}"}
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img className="profile__avatar" src={userAvatar} alt={userName} />
          <button
            className="profile__avatar-button"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div>
          <div className="profile__title-block">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            >
              <img
                src={edit}
                alt="Редактировать профиль"
                className="profile__edit-picture"
              />
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        >
          <img src={plus} alt="Добавить" className="profile__plus" />
        </button>
      </section>
      {"{"}/* Карточки */{"}"}
      <section className="elements">
      {cards.map((card, i) => (
                    <div className="card" key={i}>
                    <img
                      src={bin}
                      alt="Корзина"
                      className="card__recycle-bin"
                      id="bin"
                    />
          
                    <img
                      src={card.src}
                      className="card__image"
                      alt={card.src}
                    />
                    <div className="card__info">
                      <h2 className="card__title">Карачаевск</h2>
                      <div className="card__like-section">
                        <button type="button" className="card__button-like" />
                        <p className="card__like-counter">1</p>
                      </div>
                    </div>
                  </div>
            ))}

      </section>
    </main>
  );
}

export default Main;
