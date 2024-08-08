import { useState } from 'react';

type ValidationRule = {
  required?: { value: boolean; errMessage: string };
  pattern?: { value: RegExp; errMessage: string };
};

type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule;
};

type Errors<T> = {
  [K in keyof T]?: string;
};

interface UseFormValidationResult<T> {
  errors: Errors<T>;
  validateField: (field: keyof T, value: unknown) => boolean;
  validateAllFields: (fields: T) => boolean;
  clearFieldError: (field: keyof T) => void;
}

const useFormValidation = <T>(
  validationRules: ValidationRules<T>
): UseFormValidationResult<T> => {
  const [errors, setErrors] = useState<Errors<T>>({});

  const validateField = (field: keyof T, value: unknown): boolean => {
    const rules = validationRules[field];
    let error = '';

    if (rules?.required?.value && !value) {
      error = rules.required.errMessage;
    } else if (rules?.pattern && !rules.pattern.value.test(value as unknown as string)) {
      error = rules.pattern.errMessage;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));

    return !error;
  };

  const validateAllFields = (fields: T): boolean => {
    const newErrors: Errors<T> = {};
    let isValid = true;

    Object.keys(validationRules).forEach((field) => {
      const key = field as keyof T;
      const value = fields[key];
      const rules = validationRules[key];

      if (rules?.required?.value && !value) {
        newErrors[key] = rules.required.errMessage;
        isValid = false;
      } else if (rules?.pattern && !rules.pattern.value.test(value as unknown as string)) {
        newErrors[key] = rules.pattern.errMessage;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const clearFieldError = (field: keyof T) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined,
    }));
  };

  return {
    errors,
    validateField,
    validateAllFields,
    clearFieldError,
  };
};

export default useFormValidation;
