type ValidationRule = {
  required?: { value: boolean; errMessage: string };
  pattern?: { value: RegExp; errMessage: string };
};

const phoneValidationRules: ValidationRule = {
  required: {
    value: true,
    errMessage: "Телефон обязателен",
  },
  pattern: {
    value: /^(\+7|8)?[\s-]?(\(?\d{3}\)?)[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/,
    errMessage: "Введите корректный номер телефона",
  },
};

const nameValidationRules: ValidationRule = {
  required: {
    value: true,
    errMessage: "Имя обязательно",
  },
};

const questionValidationRules: ValidationRule = {
  required: {
    value: true,
    errMessage: "Вопрос обязателен",
  },
};

export { phoneValidationRules, nameValidationRules, questionValidationRules };
