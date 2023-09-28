import Inputmask from "inputmask";
import americanExpress from "../assets/image/american-express-icon.svg";
import dinersClub from "../assets/image/diners-club-icon.svg";
import JcbInternational from "../assets/image/JCB_logo.svg";
import maestro from "../assets/image/maestro-icon.svg";
import masterCard from "../assets/image/master-card-icon.svg";
import unionPay from "../assets/image/UnionPay_logo.svg";
import visa from "../assets/image/visa-icon.svg";
import discover from "../assets/image/discover-icon.svg";
import mir from "../assets/image/mir-icon.svg";
import debitCard from "../assets/image/debit-card-icon.svg";

export const cardLogo = () => {
  const numberCardInput = document.querySelector(".card-number-input");
  const imgCard = document.querySelector(".defaultImg");
  const frontCard = document.querySelector(".front");
  const backCard = document.querySelector(".back");
  const imgBackCard = document.querySelector(".defaultImgBack");

  const numberCardMask = new Inputmask({ mask: "9999 9999 9999 9999 99" });

  numberCardMask.mask(numberCardInput);

  numberCardInput.addEventListener("input", () => {
    const dinersClubStartNumbers = [30, 36, 38];
    const masterCardStartNumbers = [51, 52, 53, 54, 55];
    const JcbInternationalStartNumbers = [31, 35];
    const americanExpressStartNumbers = [34, 37];
    const maestroStartNumbers = [50, 56, 57, 58];
    const visaStartNumbers = [4];
    const unionPayStartNumbers = [62];
    const discoverStartNumbers = [60];
    const mirStartNumbers = [2];
    const inputValue = numberCardInput.value;

    if (
      dinersClubStartNumbers.some((prefix) => inputValue.startsWith(prefix))
    ) {
      imgCard.src = dinersClub;
      imgCard.style = "width:55px; height:35px; object-fit:cover";
      frontCard.style.background = "linear-gradient(90deg, #808080, #ffffff)";
      imgBackCard.src = dinersClub;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background = "linear-gradient(90deg, #808080, #ffffff)";
    } else if (
      masterCardStartNumbers.some((prefix) => inputValue.startsWith(prefix))
    ) {
      imgCard.src = masterCard;
      imgCard.style = "width:55px; height:35px; object-fit:contain";
      frontCard.style.background =
        "linear-gradient(45deg, #ff6300, #fbb100, #fbb100, #ff6300)";
      imgBackCard.src = masterCard;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(45deg, #ff6300, #fbb100, #fbb100, #ff6300)";
    } else if (
      JcbInternationalStartNumbers.some((prefix) =>
        inputValue.startsWith(prefix)
      )
    ) {
      imgCard.src = JcbInternational;
      imgCard.style = "width:55px; height:35px; object-fit:cover";
      frontCard.style.background = "linear-gradient(45deg, #0077bb,  #002f65)";
      imgBackCard.src = JcbInternational;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background = "linear-gradient(45deg, #0077bb,  #002f65)";
    } else if (
      americanExpressStartNumbers.some((prefix) =>
        inputValue.startsWith(prefix)
      )
    ) {
      imgCard.src = americanExpress;
      imgCard.style = "width:55px; height:35px; object-fit:cover";
      frontCard.style.background =
        "linear-gradient(45deg, #0078d4, #003087, #0078d4)";
      imgBackCard.src = americanExpress;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(45deg, #0078d4, #003087, #0078d4)";
    } else if (
      maestroStartNumbers.some((prefix) => inputValue.startsWith(prefix))
    ) {
      imgCard.src = maestro;
      imgCard.style = "width:55px; height:35px; object-fit:contain";
      frontCard.style.background =
        "linear-gradient(90deg, #eb001b,#7673c0, #00A1DF)";
      imgBackCard.src = maestro;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(90deg, #eb001b,#7673c0, #00A1DF)";
    } else if (
      visaStartNumbers.some((prefix) => inputValue.startsWith(prefix))
    ) {
      imgCard.src = visa;
      imgCard.style = "width:55px; height:35px; object-fit:cover";
      frontCard.style.background =
        "linear-gradient(-40deg,  #0e4595,#0078d4, #f2ae14)";
      imgBackCard.src = visa;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(-40deg, #f2ae14,#0078d4, #0e4595 )";
    } else if (
      unionPayStartNumbers.some((prefix) => inputValue.startsWith(prefix))
    ) {
      imgCard.src = unionPay;
      imgCard.style = "width:55px; height:35px; object-fit:cover";
      frontCard.style.background =
        "linear-gradient(90deg, #e21836, #00447c, #007b84)";
      imgBackCard.src = unionPay;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(90deg, #e21836, #00447c, #007b84)";
    } else if (
      discoverStartNumbers.some((prefix) => inputValue.startsWith(prefix))
    ) {
      imgCard.src = discover;
      imgCard.style = "width:55px; height:35px; object-fit:cover";
      frontCard.style.background =
        "linear-gradient(150deg, #4d4d4d, #4d4d4d, #f47216)";
      imgBackCard.src = discover;
      imgBackCard.style = "width:17%; height:5%";
      backCard.style.background =
        "linear-gradient(150deg, #4d4d4d, #4d4d4d, #f47216)";
    } else if (
      mirStartNumbers.some((prefix) => inputValue.startsWith(prefix))
    ) {
      imgCard.src = mir;
      imgCard.style = "width:55px; height:35px; object-fit:cover";
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
