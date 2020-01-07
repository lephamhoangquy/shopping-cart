import { ActionType } from "../constant";
//var data = JSON.parse(localStorage.getItem("CART"));
//var initialState = data ? data : [];
var initialState = [
  {
    product: {
      id: 1,
      name: "Iphone 11",
      image:
        "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png",
      description: "New product 2019",
      price: 500,
      rating: 4,
      inventory: 20
    },
    quantity: 5
  },
  {
    product: {
      id: 12,
      name: "Iphone 11 Pro Max",
      image:
        "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png",
      description: "New product 2019",
      price: 600,
      rating: 3,
      inventory: 15
    },
    quantity: 4
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      console.log("action: ", action);
      return [...state];
    default:
      return [...state];
  }
};

export default products;
