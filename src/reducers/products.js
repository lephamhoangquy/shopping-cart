var initialState = [
  {
    id: 1,
    name: "Iphone 11",
    image: "",
    description: "New product 2019",
    price: 500,
    inventory: 20
  },
  {
    id: 12,
    name: "Iphone 11 Pro Max",
    image: "",
    description: "New product 2019",
    price: 600,
    inventory: 15
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
