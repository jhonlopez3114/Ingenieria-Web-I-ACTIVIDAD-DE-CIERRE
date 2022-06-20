const products = [
  {
    name: "Bicicleta",
    image: "./imgs/Bicicleta.jpg",
    price: 1000,
    quantity: 6,
  },
  {
    name: "Iphone 13",
    image: "./imgs/Iphone_13.jpg",
    price: 200,
    quantity: 10,
  },
  {
    name: "Gafas de sol",
    image: "./imgs/Lentes_sol.jpg",
    price: 500,
    quantity: 3,
  },
  {
    name: "Juego comedor",
    image: "./imgs/Juego_comedor.jpg",
    price: 600,
    quantity: 3,
  },
  {
    name: "Computador portatil",
    image: "./imgs/Laptop_gamer.jpg",
    price: 800,
    quantity: 4,
  },
  {
    name: "Balon FIFA",
    image: "./imgs/Balon_FIFA.jpg",
    price: 800,
    quantity: 2,
  },
  {
    name: "Play station",
    image: "./imgs/Play_station.jpg",
    price: 800,
    quantity: 2,
  },
  {
    name: "Play station",
    image: "./imgs/Play_station.jpg",
    price: 800,
    quantity: 2,
  },
];

const itemAttribute = ["Image", "Name", "Price", "Quantity", "Total"];

const mainFragment = document.createDocumentFragment();

const container = document.createElement("DIV");
container.classList.add("main__container");

const containerTitle = document.createElement("DIV");
containerTitle.classList.add("car-container__title");

const titlesContainerFragment = document.createDocumentFragment();

itemAttribute.forEach((attribute) => {
  const attributeContainer = document.createElement("DIV");
  attributeContainer.classList.add("item-attribute");

  const title = document.createElement("H4");
  title.textContent = attribute;

  attributeContainer.appendChild(title);
  titlesContainerFragment.appendChild(attributeContainer);
});

containerTitle.appendChild(titlesContainerFragment);

const itemsContainerFragment = document.createDocumentFragment();

const createItemContainer = (itemText) => {
  const newContainer = document.createElement("DIV");
  newContainer.classList.add("item-container__desc");
  newContainer.textContent = itemText;
  return newContainer;
};

products.forEach(({ name, image, price, quantity }) => {
  const itemsContainer = document.createElement("DIV");
  itemsContainer.classList.add("car-container__description");

  const itemContainerImg = createItemContainer();

  const itemImg = document.createElement("IMG");
  itemImg.classList.add("img-item");
  itemImg.src = image;

  itemContainerImg.appendChild(itemImg);

  itemsContainer.appendChild(itemContainerImg);
  itemsContainer.appendChild(createItemContainer(name));
  itemsContainer.appendChild(createItemContainer(`$${price}`));
  itemsContainer.appendChild(createItemContainer(quantity));
  itemsContainer.appendChild(createItemContainer(`${quantity * price}`));

  itemsContainerFragment.appendChild(itemsContainer);
});

container.appendChild(containerTitle);
container.appendChild(itemsContainerFragment);

mainFragment.appendChild(container);
document.body.appendChild(mainFragment);
