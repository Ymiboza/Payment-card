import Inputmask from "inputmask";
import americanExpress from "./image/american-express-icon.svg";
import dinersClub from "./image/diners-club-icon.svg";
import JcbInternational from "./image/JCB_logo.svg";
import maestro from "./image/maestro-icon.svg";
import masterCard from "./image/master-card-icon.svg";
import unionPay from "./image/UnionPay_logo.svg";
import visa from "./image/visa-icon.svg";
import discover from "./image/discover-icon.svg";
import mir from "./image/mir-icon.svg";
import debitCard from "./image/debit-card-icon.svg";

export const cardLogo = () => {
  const numberCardInput = document.querySelector(".card-number-input");
  const imgCard = document.querySelector(".defaultImg");
  const frontCard = document.querySelector(".front");
  const backCard = document.querySelector(".back");
  const imgBackCard = document.querySelector(".defaultImgBack");

  const numberCardMask = new Inputmask({ mask: "9999 9999 9999 9999 99" });

  numberCardMask.mask(numberCardInput);

  numberCardInput.addEventListener("input", () => {
    if (
      numberCardInput.value.startsWith(30) ||
      numberCardInput.value.startsWith(36) ||
      numberCardInput.value.startsWith(38)
    ) {
      imgCard.src = dinersClub;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background = "linear-gradient(90deg, #808080, #ffffff)";
      imgBackCard.src = dinersClub;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background = "linear-gradient(90deg, #808080, #ffffff)";
    } else if (
      numberCardInput.value.startsWith(51) ||
      numberCardInput.value.startsWith(52) ||
      numberCardInput.value.startsWith(53) ||
      numberCardInput.value.startsWith(54) ||
      numberCardInput.value.startsWith(55)
    ) {
      imgCard.src = masterCard;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background =
        "linear-gradient(45deg, #ff6300, #fbb100, #fbb100, #ff6300)";
      imgBackCard.src = masterCard;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(45deg, #ff6300, #fbb100, #fbb100, #ff6300)";
    } else if (
      numberCardInput.value.startsWith(31) ||
      numberCardInput.value.startsWith(35)
    ) {
      imgCard.src = JcbInternational;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background = "linear-gradient(45deg, #0077bb,  #002f65)";
      imgBackCard.src = JcbInternational;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background = "linear-gradient(45deg, #0077bb,  #002f65)";
    } else if (
      numberCardInput.value.startsWith(34) ||
      numberCardInput.value.startsWith(37)
    ) {
      imgCard.src = americanExpress;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background =
        "linear-gradient(45deg, #0078d4, #003087, #0078d4)";
      imgBackCard.src = americanExpress;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(45deg, #0078d4, #003087, #0078d4)";
    } else if (
      numberCardInput.value.startsWith(50) ||
      numberCardInput.value.startsWith(56) ||
      numberCardInput.value.startsWith(57) ||
      numberCardInput.value.startsWith(58)
    ) {
      imgCard.src = maestro;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background =
        "linear-gradient(90deg, #eb001b,#7673c0, #00A1DF)";
      imgBackCard.src = maestro;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(90deg, #eb001b,#7673c0, #00A1DF)";
    } else if (numberCardInput.value.startsWith(4)) {
      imgCard.src = visa;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background =
        "linear-gradient(-40deg,  #0e4595,#0078d4, #f2ae14)";
      imgBackCard.src = visa;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(-40deg, #f2ae14,#0078d4, #0e4595 )";
    } else if (numberCardInput.value.startsWith(62)) {
      imgCard.src = unionPay;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background =
        "linear-gradient(90deg, #e21836, #00447c, #007b84)";
      imgBackCard.src = unionPay;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(90deg, #e21836, #00447c, #007b84)";
    } else if (numberCardInput.value.startsWith(60)) {
      imgCard.src = discover;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background =
        "linear-gradient(150deg, #4d4d4d, #4d4d4d, #f47216)";
      imgBackCard.src = discover;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(150deg, #4d4d4d, #4d4d4d, #f47216)";
    } else if (numberCardInput.value.startsWith(2)) {
      imgCard.src = mir;
      imgCard.style = "width:20%; height:5%";
      frontCard.style.background =
        "linear-gradient(90deg, #37a72e, #37a72e, #0e4595)";
      imgBackCard.src = mir;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(90deg, #37a72e, #37a72e, #0e4595)";
    } else {
      imgCard.src = debitCard;
      imgCard.style = "width:15%; height:5%";
      frontCard.style =
        "background:linear-gradient(45deg, blueviolet, deeppink)";
      imgBackCard.src = debitCard;
      imgBackCard.style = "width:14%; height:5%";
      backCard.style =
        "background:linear-gradient(45deg, blueviolet, deeppink)";
    }
  });
};
