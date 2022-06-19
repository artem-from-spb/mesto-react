import kusto from '../images/kusto.jpg';
import edit from '../images/edit.svg';
import plus from '../images/plus.svg';

function Main() {
    function handleEditAvatarClick() {
        const popupAvatar = document.querySelector('.popup_avatar');
        const popupAvatarOpenButton = document.querySelector('.profile__avatar-button');

        popupAvatarOpenButton.addEventListener('click', () => {
            popupAvatar.classList.add('popup_opened');
        });
    }

    function handleEditProfileClick() {
        const popupProfile = document.querySelector('.popup_profile');
        const popupProfileOpenButton = document.querySelector('.profile__edit');

        popupProfileOpenButton.addEventListener('click', () => {
            popupProfile.classList.add('popup_opened');
        });
    }

    function handleAddPlaceClick() {
        const popupAddPlace = document.querySelector('.popup_add');
        const popupAddPlaceButton = document.querySelector('.profile__add-button');

        popupAddPlaceButton.addEventListener('click', () => {
            popupAddPlace.classList.add('popup_opened')
        });
    }

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
          <button className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
        </div>
        <div>
          <div className="profile__title-block">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              className="profile__edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={handleEditProfileClick}
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
          onClick={handleAddPlaceClick}

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