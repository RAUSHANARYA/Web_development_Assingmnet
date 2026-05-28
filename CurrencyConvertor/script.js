const countryList = {
  USD: "US",
  INR: "IN",
  EUR: "FR",
  GBP: "GB",
  JPY: "JP",
  AUD: "AU",
  CAD: "CA",
  CNY: "CN",
  RUB: "RU",
  AED: "AE",
};

const fromCurrency = document.getElementById("fromCurrency");

const toCurrency = document.getElementById("toCurrency");

const fromFlag = document.getElementById("fromFlag");

const toFlag = document.getElementById("toFlag");

const result = document.getElementById("result");

const amount = document.getElementById("amount");

// Populate dropdowns
for (let code in countryList) {
  let option1 = document.createElement("option");

  option1.value = code;
  option1.innerText = code;

  let option2 = document.createElement("option");

  option2.value = code;
  option2.innerText = code;

  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);
}

fromCurrency.value = "USD";
toCurrency.value = "INR";

// Update flags
function updateFlag(element, flagElement) {
  const countryCode = countryList[element.value];

  flagElement.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

fromCurrency.addEventListener("change", () => {
  updateFlag(fromCurrency, fromFlag);
});

toCurrency.addEventListener("change", () => {
  updateFlag(toCurrency, toFlag);
});

// Convert Currency
async function convertCurrency() {
  const amt = amount.value;

  if (amt === "" || amt <= 0) {
    alert("Enter valid amount");
    return;
  }

  const from = fromCurrency.value;
  const to = toCurrency.value;

  const URL = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const response = await fetch(URL);

    const data = await response.json();

    const rate = data.rates[to];

    const finalAmount = (amt * rate).toFixed(2);

    result.innerText = `${amt} ${from} = ${finalAmount} ${to}`;
  } catch (error) {
    result.innerText = "Something went wrong ";

    console.log(error);
  }
}

document
  .getElementById("convertBtn")
  .addEventListener("click", convertCurrency);

// Swap currencies
document.getElementById("swapBtn").addEventListener("click", () => {
  let temp = fromCurrency.value;

  fromCurrency.value = toCurrency.value;

  toCurrency.value = temp;

  updateFlag(fromCurrency, fromFlag);
  updateFlag(toCurrency, toFlag);
});
