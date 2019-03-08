$("#offer-form").validate({
  rules: {
    username: {
    required: true,
    minlength: 2,
    maxlength: 15,
    },
    phone: {
      required: true,
    },
  },
  messages: {
    username: {
      required: "Заполните поле",
      minlength: jQuery.validator.format("Осталось символов: {0}"),
      maxlength: jQuery.validator.format("Не больше 15 символов"),
    },
    phone: {
      required: "Укажите телефон",
      minlength: jQuery.validator.format("Осталось символов: {0}"),
      maxlength: jQuery.validator.format("Не больше 10 символов"),
    },
  },
  errorClass: "invalid",
  errorElement: "div",
});

$('.phone').mask('+8 (999) 999-99-99');

$("#brif-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    telephone: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: "Заполните поле",
      minlength: jQuery.validator.format("Осталось символов: {0}"),
      maxlength: jQuery.validator.format("Не больше 15 символов"),
    },
    telephone: {
      required: "Укажите телефон",
      minlength: jQuery.validator.format("Осталось символов: {0}"),
      maxlength: jQuery.validator.format("Не больше 10 символов"),
    },
    email: {
      required: "Нам нужен ваш email",
      email: "Введите корректный email"
    },
  },
  errorClass: "invalid",
  errorElement: "div",
});

$('.phone').mask('+8 (999) 999-99-99');