let inputValues = {
  name: "",
  price: "",
  inventory: "",
};

const handleEventChange = (e) => {
  inputValues = {
    ...inputValues,
    [e.target.name]: e.target.value,
  };
};

const handleSubmit = (e) => {
  e.preventDefault();

  Object.keys(inputValues).forEach((key) => {
    validation(key);
  });

  const everyIsNotNull = Object.values(inputValues).every(
    (value) => value !== ""
  );
  if (everyIsNotNull) {
    alert("Producto Creado");
  }
};

const validation = (key) => {
  if (!inputValues[key]) {
    document
      .querySelector(`.form__container-input .leyenda_${key}`)
      .classList.add("mostrar_leyendas");
  } else {
    document
      .querySelector(`.form__container-input .leyenda_${key}`)
      .classList.remove("mostrar_leyendas");
  }
};

document.querySelector(".form").addEventListener("submit", handleSubmit);

document
  .querySelectorAll(".form__container-input .input__product")
  .forEach((input) => {
    input.addEventListener("change", handleEventChange);
  });
