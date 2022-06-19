import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />

      {"{"}/* Попап редактирования Кусто */{"}"}
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        formName="edit"
        btnText="Сохранить"
      >
        <input
          type="text"
          className="popup__input popup__input_type_name"
          defaultvalue="Жак-Ив Кусто"
          id="name-input"
          required
          minLength="{2}"
          maxLength="{40}"
          name="name"
        />
        <span className="popup__error name-input-error" id="name-input-error">
          aaaaaaa
        </span>
        <input
          type="text"
          className="popup__input popup__input_type_about"
          defaultvalue="Исследователь океана"
          id="job-input"
          required
          minLength="{2}"
          maxLength="{200}"
          name="about"
        />
        <span className="popup__error job-input-error" id="job-input-error">
          ssssssssss
        </span>
      </PopupWithForm>

      {"{"}/* Попап добавления карточек */{"}"}
      <PopupWithForm
        name="add"
        title="Новое место"
        formName="add"
        btnText="Создать"
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
        <span className="popup__error place-input-error" id="place-input-error">
          dddddddddd
        </span>
        <input
          type="url"
          className="popup__input popup__input_type_about"
          placeholder="Ссылка на картинку"
          required
          id="link-input"
          name="link"
        />
        <span className="popup__error link-input-error" id="link-input-error">
          fffffffff
        </span>
      </PopupWithForm>

      <ImagePopup />

      {"{"}/* Подтвердить удаление */{"}"}
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        formName='null'
        btnText="Да"
      >

      </PopupWithForm>

{/*       <section className="popup popup_confirm">
        <div className="popup__container">
          <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
          <button
            className="popup__button-save popup__button-save_confirm"
            type="submit"
            aria-label="Создать"
          >
            Да
          </button>
          <button type="button" className="popup__button-close">
            <img
              src="<%=require('./images/Close_Icon.svg')%>"
              alt="Закрыть окно"
              className="popup__close-img"
            />
          </button>
        </div>
      </section> */}
      {"{"}/* Обновить аватар */{"}"}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        formName="avatar"
        btnText="Сохранить"
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
            src="<%=require('./images/recycle-bin.svg')%>"
            alt="Корзина"
            className="card__recycle-bin"
            id="bin"
          />
          <img
            src="<%=require('./images/karachaevsk.jpg')%>"
            className="card__image"
            alt="Карачаевск"
          />
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
