import Close_Icon from "../images/Close_Icon.svg";

function PopupWithForm({ title, name, formName, btnText, popupConfirm, children }) {
/*     function confirmPopupHandler() {
        let buttonClass = '';
        if (name === 'profile') {
            buttonClass = 'popup__button-save popup__button-save_confirm';
        } else {
            buttonClass = 'popup__button-save';
        }
        console.log(buttonClass)
        console.log(name)
        return buttonClass;
    } */
  return (
    <div className={`popup popup_${name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form popup__form_edit"
          noValidate
          name={formName}
        >

          {children}

          <button
            className='popup__button-save'
            type="submit"
            aria-label={btnText}
          >
            {btnText}
          </button>
        </form>
        <button type="button" className='popup__button-close'>
          <img
            src={Close_Icon}
            alt="Закрыть окно"
            className="popup__close-img"
          />
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
