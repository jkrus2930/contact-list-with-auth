export interface UserModel {
  /**
   * Идентификатор пользователя
   */
  userId?: number;
  /**
   * Имя пользователя
   */
  firstName: string;
  /**
   * Фамилия
   */
  lastName: string;
  /**
   * Адрес электронной почты / логин
   */
  email: string;
  /**
   * Номер телефона
   */
  phone: string;
  /**
   * Страна
   */
  country: string;
  /**
   * Пароль
   */
  password: string;
  /**
   * Подтверждение пароля
   */
  passwordConfirm: string;
}
