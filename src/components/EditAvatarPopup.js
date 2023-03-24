import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = React.createRef("");

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value /* Значение инпута, полученное с помощью рефа */,
    });
  }

  return (
    <PopupWithForm
      classs="edit-avatar"
      name="avatar-content"
      title="Обновить аватар"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        type="url"
        id="avatar-field"
        ref={avatarRef}
        className="popup__field popup__field_input_avatar"
        required
        placeholder="Ссылка на аватар"
        name="link"
        defaultValue=""
      />
      <span className="avatar-field-error popup__field-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
