/* eslint-disable */
import Inputmask from "inputmask";
import { validateEmail, requiredCard, validateDate } from "./validationForm";

export function validation() {
  const inputs = document.querySelectorAll(".input");
  const cardNumberInput = document.querySelector(".card-number-input");
  const cardNumberBox = document.querySelector(".card-number-box");
  const cardHolderInput = document.querySelector(".card-holder-input");
  const cardHolderEmail = document.querySelector(".card-holder-email");
  const monthInput = document.querySelector(".month-input");
  const expMonth = document.querySelector(".exp-month");
  const cvvInput = document.querySelector(".cvv-input");
  const cvvBox = document.querySelector(".cvv-box");
  const front = document.querySelector(".front");
  const back = document.querySelector(".back");
  const btn = document.querySelector(".btn");
  const cardNumberErrorBlock = document.querySelector(
    ".card-number-error-block"
  );
  const cardHolderErrorBlock = document.querySelector(
    ".card-holder-error-block"
  );
  const cardMonthErrorBlock = document.querySelector(".card-month-error-block");
  const cardCVVErrorBlock = document.querySelector(".card-cvv-error-block");

  cardNumberInput.addEventListener("input", () => {
    cardNumberBox.innerText = cardNumberInput.value;
    if (cardNumberBox.innerText === '') cardNumberBox.innerText = '#### #### #### #### ##'
  });
  cardHolderInput.addEventListener("input", () => {
    cardHolderEmail.innerText = cardHolderInput.value;
    if (cardHolderEmail.innerText === '') cardHolderEmail.innerText = 'EMAIL'
  });
  monthInput.addEventListener("input", () => {
    expMonth.innerText = monthInput.value;
    if (expMonth.innerText === '') expMonth.innerText = 'MM/YY'
  });
  cvvInput.addEventListener("input", () => {
    cvvBox.innerText = cvvInput.value;
    if (cvvBox.innerText === '') cvvBox.innerText = '***'
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (
        cardNumberInput.classList.contains("is-invalid") ||
        cardHolderInput.classList.contains("is-invalid") ||
        monthInput.classList.contains("is-invalid") ||
        cvvInput.classList.contains("is-invalid")
      ) {
        btn.disabled = true;
        btn.classList.remove("submit-btn");
        btn.classList.add("disabled");
        return
      }
      if (
        cardNumberInput.value === "" ||
        cardHolderInput.value === "" ||
        monthInput.value === "" ||
        cvvInput.value === ""
      ) {
        btn.disabled = true;
        btn.classList.remove("submit-btn");
        btn.classList.add("disabled");
        return
      }
      if (
        cardNumberInput.value !== "" &&
        cardHolderInput.value !== "" &&
        monthInput.value !== "" &&
        cvvInput.value !== ""
      ) {
        btn.disabled = false;
        btn.classList.add("submit-btn");
        btn.classList.remove("disabled");
        return
      }

    });
    function removeError() {
      this.classList.remove("is-invalid");

      if (this.classList.contains("cvv-input")) {
        cardCVVErrorBlock.textContent = "";
      }
      if (this.classList.contains("month-input")) {
        cardMonthErrorBlock.textContent = "";
      }
      if (this.classList.contains("card-number-input")) {
        cardNumberErrorBlock.textContent = "";
      }
      if (this.classList.contains("card-holder-input")) {
        cardHolderErrorBlock.textContent = "";
      }
    }

    inputs.forEach((input) => input.addEventListener("input", removeError));
  });
  cardHolderInput.addEventListener("blur", () => {
    validateEmail(cardHolderInput, cardHolderErrorBlock);
  });
  cardNumberInput.addEventListener("blur", () => {
    requiredCard(cardNumberInput, cardNumberErrorBlock, "Введите номер карты!");
  });
  monthInput.addEventListener("blur", () => {
    validateDate(monthInput, cardMonthErrorBlock);
  });
  cvvInput.addEventListener("blur", () => {
    requiredCard(cvvInput, cardCVVErrorBlock, "Введите CVC Код!");
  });

  cvvInput.onmouseenter = () => {
    front.style.transform = "perspective(1000px) rotateY(-180deg)";
    back.style.transform = "perspective(1000px) rotateY(0deg)";
  };
  cvvInput.onmouseleave = () => {
    front.style.transform = "perspective(1000px) rotateY(0deg)";
    back.style.transform = "perspective(1000px) rotateY(180deg)";
  };
}

export function inputMask(inputNumber, inputMonth, inputCVV) {
  const cCodeMask = new Inputmask({ mask: "999" });
  const expireMask = new Inputmask({ mask: "99/99" });
  const numberCardMask = new Inputmask({ mask: "9999 9999 9999 9999 99" });

  cCodeMask.mask(inputCVV);
  expireMask.mask(inputMonth);
  numberCardMask.mask(inputNumber);
}
