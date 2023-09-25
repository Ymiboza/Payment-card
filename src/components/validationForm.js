export function validateEmail(input, errorBlock) {
  if (!input.value) {
    errorBlock.textContent = "Введите E-mail!";
    input.classList.add("is-invalid");
    return false;
  } else if (!input.value.includes("@") || !input.value.includes(".")) {
    errorBlock.textContent = "Неправильный E-mail!";
    input.classList.add("is-invalid");
    return false;
  } else {
    errorBlock.textContent = "";
    input.classList.remove("is-invalid");
    return true;
  }
}

export function requiredCard(input, errorBlock, errorText) {
  const length16 = input.value[18];

  if (!input.value) {
    errorBlock.textContent = errorText;
    input.classList.add("is-invalid");
    return false;
  } else if (
    input.value.includes("_") &&
    input.classList.contains("cvv-input")
  ) {
    errorBlock.textContent = "Не менее 3-х цифр!";
    input.classList.add("is-invalid");
    return false;
  } else if (length16 == "_" && input.classList.contains("card-number-input")) {
    errorBlock.textContent = "Не менее 16 цифр!";
    input.classList.add("is-invalid");
    return false;
  } else {
    errorBlock.textContent = "";
    input.classList.remove("is-invalid");
    return true;
  }
}

export function validateDate(input, errorBlock) {
  const currentDate = new Date();
  const inputValue = input.value;

  if (input.value.includes("_") && input.classList.contains("month-input")) {
    errorBlock.textContent = "Не менее 4-х цифр!";
    input.classList.add("is-invalid");
    return false;
  }
  const [monthStr, yearStr] = inputValue.split("/");

  if (monthStr.length !== 2 || yearStr.length !== 2) {
    errorBlock.textContent = "Месяц и год должны быть двузначными";
    input.classList.add("is-invalid");
    return false;
  }
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  if (month < 1 || month > 12) {
    errorBlock.textContent = "Введите корректный месяц от 01 до 12";
    input.classList.add("is-invalid");
    return false;
  }

  const minDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
    0,
    0,
    0
  );

  const inputDate = new Date(2000 + year, month - 1, 1, 0, 0, 0);

  if (inputDate <= minDate) {
    errorBlock.textContent = "Минимальная дата от 10/23";
    input.classList.add("is-invalid");
    return false;
  }
  input.classList.remove("is-invalid");
  errorBlock.textContent = "";
  return true;
}
