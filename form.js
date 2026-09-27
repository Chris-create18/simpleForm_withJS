const showButton = document.getElementById("showInfo");

const output = document.getElementById("output");

const form = document.querySelector("#userForm");

const formCards = document.getElementsByClassName("form-card");

const headings = document.getElementsByTagName("h2");

const inputFields = document.querySelectorAll(
  "#userForm input, #userForm select",
);

//FUNCTION WHEN BUTTON CLICKED
showButton.addEventListener("click", function () {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;
  const course = document.getElementById("course").value;

  const selectedYear = document.querySelector(
    'input[name="yearLevel"]:checked',
  );

  const yearLevel = selectedYear ? selectedYear.value : "";

  // Favorite Color radio
  const selectedColor = document.querySelector(
    'input[name="favoriteColor"]:checked',
  );
  const favoriteColor = selectedColor ? selectedColor.value : "";

  const selectedHobbies = document.querySelectorAll(
    'input[name="favoriteHobby"]:checked',
  );

  const favoriteHobby = Array.from(selectedHobbies)
    .map(function (hobby) {
      return hobby.value;
    })
    .join(", ");

  const userInfo = [
    ["Full Name", fullName],
    ["Email Address", email],
    ["Age", age],
    ["Gender", gender],
    ["Birthday", birthday],
    ["Contact Number", contact],
    ["Address", address],
    ["Course", course],
    ["Year Level", yearLevel],
    ["Favorite Color", favoriteColor],
    ["Favorite Hobby", favoriteHobby],
  ];

  output.textContent = "";

  userInfo.forEach(function (info) {
    const item = document.createElement("div");
    const label = document.createElement("strong");
    const value = document.createElement("span");

    item.className = "info-item";
    label.textContent = info[0];
    value.textContent = info[1] || "Not provided";

    item.appendChild(label);
    item.appendChild(value);
    output.appendChild(item);
  });

  headings[1].textContent = "Your Information";
});
