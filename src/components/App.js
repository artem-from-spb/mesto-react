import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import bin from "../images/recycle-bin.svg";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

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

  return (
    <div>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      {/* Попап редактирования Кусто */}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        formName="edit"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="popup__input popup__input_type_name"
          defaultValue="Жак-Ив Кусто"
          id="name-input"
          required
          minLength="{2}"
          maxLength="{40}"
          name="name"
        />
        <span
          className="popup__error name-input-error"
          id="name-input-error"
        ></span>
        <input
          type="text"
          className="popup__input popup__input_type_about"
          defaultValue="Исследователь океана"
          id="job-input"
          required
          minLength="{2}"
          maxLength="{200}"
          name="about"
        />
        <span
          className="popup__error job-input-error"
          id="job-input-error"
        ></span>
      </PopupWithForm>

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
          <img src={bin} alt="Корзина" className="card__recycle-bin" id="bin" />
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
  );
}

export default App;
