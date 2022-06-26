import edit from "../images/edit.svg";
import plus from "../images/plus.svg";
import { api } from "../utils/Api";
import { useState, useEffect } from "react";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => alert(err));

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main>
      {/* Кусто */}
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

      {/* Карточки */}
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
