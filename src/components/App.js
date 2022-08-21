import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import bin from "../images/recycle-bin.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => alert(err));
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => alert(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => alert(err));
  }

  function handleCardDelete(id) {
    api
      .removeCard(id)
      .then(() => {
        setCards(cards.filter((card) => card._id !== id));
      })
      .catch((err) => alert(err));
  }

  function handleUpdateUser(user) {
    api
      .editProfileData(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      // .then(closeAllPopups)
      .catch((err) => alert(err));
  }

 
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />

        <Footer />

        {/* Попап редактирования Кусто */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/* Попап добавления карточек */}
        <PopupWithForm
          name="add"
          title="Новое место"
          formName="add"
          btnText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="popup__input popup__input_type_name"
            placeholder="Название"
            required
            minLength="{2}"
            maxLength="{30}"
            id="place-input"
            name="name"
          />
          <span
            className="popup__error place-input-error"
            id="place-input-error"
          ></span>
          <input
            type="url"
            className="popup__input popup__input_type_about"
            placeholder="Ссылка на картинку"
            required
            id="link-input"
            name="link"
          />
          <span
            className="popup__error link-input-error"
            id="link-input-error"
          ></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        {/* Подтвердить удаление */}
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          formName="null"
          btnText="Да"
          isOpen={false}
        ></PopupWithForm>

        {/* Обновить аватар */}
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          formName="avatar"
          btnText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="popup__input popup__input_avatar"
            placeholder="Ссылка на картинку"
            required
            id="avatar-input"
            name="avatar"
          />
          <span
            className="popup__error avatar-input-error"
            id="avatar-input-error"
          >
            dddddddddd
          </span>
        </PopupWithForm>

        {/* Темплейт - заготовка карточки */}
        <template id="card-template">
          <div className="card">
            <img
              src={bin}
              alt="Корзина"
              className="card__recycle-bin"
              id="bin"
            />
            <img src="" className="card__image" alt="Карачаевск" />
            <div className="card__info">
              <h2 className="card__title">Карачаевск</h2>
              <div className="card__like-section">
                <button type="button" className="card__button-like" />
                <p className="card__like-counter">1</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
