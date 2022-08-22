import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      formName="edit"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_type_name"
        id="name-input"
        required
        minLength="{2}"
        maxLength="{40}"
        name="name"
        onChange={handleNameChange}
        value={name || ""}
      />
      <span
        className="popup__error name-input-error"
        id="name-input-error"
      ></span>
      <input
        type="text"
        className="popup__input popup__input_type_about"
        id="job-input"
        required
        minLength="{2}"
        maxLength="{200}"
        name="about"
        onChange={handleDescriptionChange}
        value={description || ""}
      />
      <span
        className="popup__error job-input-error"
        id="job-input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
