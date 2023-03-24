import React from "react";
import PopupWithForm from "./PopupWithForm";
import { UserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(UserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault(); // Запрещаем браузеру переходить по адресу формы

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      classs="edit-profile"
      name="profile-content"
      title="Редактировать профиль"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        type="text"
        id="name-field"
        className="popup__field popup__field_input_name"
        value={name || ""}
        onChange={handleNameChange}
        minLength="2"
        maxLength="40"
        required
        placeholder="Ваше имя"
        name="name"
      />
      <span className="name-field-error popup__field-error"></span>
      <input
        type="text"
        id="profession-field"
        className="popup__field popup__field_input_profession"
        value={description || ""}
        onChange={handleDescriptionChange}
        minLength="2"
        maxLength="200"
        required
        placeholder="Ваша профессия"
        name="about"
      />
      <span className="profession-field-error popup__field-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
