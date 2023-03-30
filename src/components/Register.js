import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../auth.js";

function Register({ handleNotification, handleErrorMessageNotification }) {
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });

  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue);
    setIsAuthLoading(true);
    auth
      .register(formValue.email, formValue.password)
      .then((res) => {
        if (!(res.message || res.error)) {
          console.log(res);
          handleNotification(true);
          navigate("/signin", { replace: true });
        } else {
          handleErrorMessageNotification(res.message || res.error);
          handleNotification(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsAuthLoading(false));
  }

  return (
    <div className="login login__register">
      <form
        name="form__login"
        className="popup__content"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2 className="login__title">Регистрация</h2>
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
          defaultValue="Зарегистрироваться"
          onSubmit={handleSubmit}
        >
          {isAuthLoading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
      <div className="login__enter">
        <Link to="/signin" className="link__reset">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;