import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../auth.js";

function Login({ handleLogin, handleNotification }) {
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.password || !formValue.email) {
      return;
    }
    setIsAuthLoading(true);
    auth
      .authorize(formValue.password, formValue.email)
      .then((data) => {
        if (data.token) {
          handleLogin();
          setFormValue({ password: "", email: "" });
          navigate("/", { replace: true });
        }
      })
      .catch((err) => handleNotification(false))
      .finally(() => setIsAuthLoading(false));
  };

  return (
    <div className="login">
      <form
        name="form__login"
        className="popup__content"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2 className="login__title">Вход</h2>
        <input
          type="text"
          id="email-field"
          className="login__field"
          value={formValue.email}
          onChange={handleChange}
          minLength="2"
          maxLength="50"
          required
          placeholder="Email"
          name="email"
        />
        <span className="name-field-error login__span"></span>
        <input
          type="text"
          id="password-field"
          className="login__field"
          value={formValue.password}
          onChange={handleChange}
          minLength="2"
          maxLength="40"
          required
          placeholder="Пароль"
          name="password"
        />
        <span className="profession-field-error login__span"></span>
        <button
          type="submit"
          className="login__submit"
          name="submit"
          defaultValue="Войти"
          onSubmit={handleSubmit}
        >
          {isAuthLoading ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
}

export default Login;
