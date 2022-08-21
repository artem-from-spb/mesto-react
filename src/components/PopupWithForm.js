import Close_Icon from "../images/Close_Icon.svg";

function PopupWithForm({
  title,
  name,
  formName,
  btnText,
  isOpen,
  onClose,
  children,
  onSubmit
}) {
  function confirmPopupHandler() {
    let buttonClass = "";
    if (name === "confirm") {
      buttonClass = "popup__button-save popup__button-save_confirm";
    } else {
      buttonClass = "popup__button-save";
    }
    return buttonClass;
  }
  
  return (
    <div className={`popup popup_${name}` + (isOpen ? " popup_opened" : "")}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form popup__form_edit"
          noValidate
          name={formName}
          onSubmit={onSubmit}
        >
          {children}

          <button
            className={confirmPopupHandler()}
            type="submit"
            aria-label={btnText}
          >
            {btnText}
          </button>
        </form>
        <button type="button" className="popup__button-close" onClick={onClose}>
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
