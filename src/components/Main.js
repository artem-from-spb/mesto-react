import kusto from '../images/kusto.jpg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main>
      {"{"}/* Кусто */{"}"}
      <section className="profile">
        <div className="profile__avatar-overlay">
          <img
            className="profile__avatar"
            src={kusto}
            alt="Жак-Ив Кусто"
          />
          <button className="profile__avatar-button" onClick={onEditAvatar}></button>
        </div>
        <div>
          <div className="profile__title-block">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
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
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}

        >
          <img
            src={plus}
            alt="Добавить"
            className="profile__plus"
          />
        </button>
      </section>
      {"{"}/* Карточки */{"}"}
      <section className="elements"></section>
    </main>
  );
}

export default Main;