import { cardLogo } from "./cardLogo";
import { validation, inputMask } from "./validation";

const container = document.createElement("div");
container.className = "container";

const cardContainer = document.createElement("div");
cardContainer.className = "card-container";

const front = document.createElement("div");
front.className = "front";

const imageFront = document.createElement("div");
imageFront.className = "image";

const chipImg = document.createElement("img");
chipImg.src = "image/chip.png";
chipImg.alt = "";

const defaultImg = document.createElement("img");
defaultImg.className = "defaultImg";
defaultImg.src = "image/debit-card-icon.svg";
defaultImg.alt = "";

imageFront.appendChild(chipImg);
imageFront.appendChild(defaultImg);

const cardNumberBox = document.createElement("div");
cardNumberBox.className = "card-number-box";
cardNumberBox.textContent = "#### #### #### #### ##";

const flexbox = document.createElement("div");
flexbox.className = "flexbox";

const box1 = document.createElement("div");
box1.className = "box";

const span1 = document.createElement("span");
span1.textContent = "card holder";

const cardHolderName = document.createElement("div");
cardHolderName.className = "card-holder-email";
cardHolderName.textContent = "Email";

box1.appendChild(span1);
box1.appendChild(cardHolderName);

const box2 = document.createElement("div");
box2.className = "box";

const span2 = document.createElement("span");
span2.textContent = "expires";

const expiration = document.createElement("div");
expiration.className = "expiration";

const expMonth = document.createElement("span");
expMonth.className = "exp-month";
expMonth.textContent = "mm/yy";

expiration.appendChild(expMonth);

box2.appendChild(span2);
box2.appendChild(expiration);

flexbox.appendChild(box1);
flexbox.appendChild(box2);

front.appendChild(imageFront);
front.appendChild(cardNumberBox);
front.appendChild(flexbox);

const back = document.createElement("div");
back.className = "back";

const stripe = document.createElement("div");
stripe.className = "stripe";

const box3 = document.createElement("div");
box3.className = "box";

const span3 = document.createElement("span");
span3.textContent = "cvv";

const cvvBox = document.createElement("div");
cvvBox.className = "cvv-box";
cvvBox.textContent = "***";

const defaultImgBack = document.createElement("img");
defaultImgBack.className = "defaultImgBack";
defaultImgBack.src = "image/debit-card-icon.svg";
defaultImgBack.alt = "";

box3.appendChild(span3);
box3.appendChild(cvvBox);
box3.appendChild(defaultImgBack);

back.appendChild(stripe);
back.appendChild(box3);

cardContainer.appendChild(front);
cardContainer.appendChild(back);

const form = document.createElement("form");
form.action = "";

const inputBox1 = document.createElement("div");
inputBox1.className = "inputBox";

const spanContainer = document.createElement("div");
spanContainer.className = "spanContainer";
const span4 = document.createElement("span");
span4.textContent = "card number";

const cardNumberInput = document.createElement("input");
cardNumberInput.className = "card-number-input input";
cardNumberInput.placeholder = "#### #### #### #### ##";
const cardNumberErrorBlock = document.createElement("span");
cardNumberErrorBlock.className = "error-block card-number-error-block";
const tooltipContainer = document.createElement("div");
const tooltipIcon = document.createElement("img");
const tooltip = document.createElement("div");
const tooltipText = document.createElement("p");
const tooltipImg = document.createElement("img");
tooltipContainer.classList.add("tooltip-container");
tooltipIcon.classList.add("tooltip-icon");
tooltipIcon.src = "./image/info-icon.svg";
tooltip.classList.add("tooltip");
tooltipText.innerHTML = `
<ul>Номера карт начинаются:</ul>
<li><b>2</b> - Мир</li>
<li><b>30, 36, 38</b> - Diners Club</li>
<li><b>31, 35</b> - JCB International</li>
<li><b>34, 37</b> - American Express</li>
<li><b>4</b> - VISA</li>
<li><b>50, 56, 57, 58</b> - Maestro</li>
<li><b>51, 52, 53, 54, 55</b> - MasterCard</li>
<li><b>60</b> - Discover</li>
<li><b>62</b> - China UnionPay</li>
`;

tooltipContainer.addEventListener("mouseenter", () => {
  tooltip.style.display = "block";
});

tooltipContainer.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});
tooltip.append(tooltipText, tooltipImg);
tooltipContainer.append(tooltipIcon, tooltip);
spanContainer.append(span4, tooltipContainer);
inputBox1.appendChild(spanContainer);
inputBox1.appendChild(cardNumberInput);
inputBox1.appendChild(cardNumberErrorBlock);

const inputBox2 = document.createElement("div");
inputBox2.className = "inputBox";

const span5 = document.createElement("span");
span5.textContent = "Email";

const cardHolderInput = document.createElement("input");
cardHolderInput.type = "text";
cardHolderInput.className = "card-holder-input input";
cardHolderInput.placeholder = "unknown@gmail.com";
const cardHolderErrorBlock = document.createElement("span");
cardHolderErrorBlock.className = "error-block card-holder-error-block";

inputBox2.appendChild(span5);
inputBox2.appendChild(cardHolderInput);
inputBox2.appendChild(cardHolderErrorBlock);

const flexbox2 = document.createElement("div");
flexbox2.className = "flexbox";

const inputBox3 = document.createElement("div");
inputBox3.className = "inputBox";

const span6 = document.createElement("span");
span6.textContent = "expiration mm/yy";

const monthInput = document.createElement("input");
monthInput.className = "month-input input";
monthInput.placeholder = "MM/YY";
const monthErrorBlock = document.createElement("span");
monthErrorBlock.className = "error-block card-month-error-block";

inputBox3.appendChild(span6);
inputBox3.appendChild(monthInput);
inputBox3.appendChild(monthErrorBlock);

const inputBox5 = document.createElement("div");
inputBox5.className = "inputBox";

const span8 = document.createElement("span");
span8.textContent = "cvv";

const cvvInput = document.createElement("input");
cvvInput.type = "text";
cvvInput.maxLength = "3";
cvvInput.className = "cvv-input input";
cvvInput.placeholder = "***";
const cvvErrorBlock = document.createElement("span");
cvvErrorBlock.className = "error-block card-cvv-error-block";

inputBox5.appendChild(span8);
inputBox5.appendChild(cvvInput);
inputBox5.appendChild(cvvErrorBlock);

flexbox2.appendChild(inputBox3);
flexbox2.appendChild(inputBox5);

const submitBtn = document.createElement("button");
submitBtn.className = "submit-btn btn";
submitBtn.textContent = "Submit";
submitBtn.disabled = true;
submitBtn.classList.remove("submit-btn");
submitBtn.classList.add("disabled");

form.appendChild(inputBox1);
form.appendChild(inputBox2);
form.appendChild(flexbox2);
form.appendChild(submitBtn);

container.appendChild(cardContainer);
container.appendChild(form);

document.body.appendChild(container);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

validation();
inputMask(cardNumberInput, monthInput, cvvInput);
cardLogo();
