
export const initialState = {
  basket: [],
  user: null,
};

export const getCartTotal = (cart) => 
  cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      case "EMPTY_CART":
        return {
          ...state,
          basket: []
        }
      case "REMOVE_FROM_CART":
        const index = state.basket.findIndex(
        (basketItem) => state.basket.id === action.id
        ) 
        let newBasket = [...state.basket];
        if (index >= 0) {
          newBasket.splice(index, 1);
        }else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in the basket!`
          )
        }
        return {
          ...state,
          basket: newBasket
        }
  }
}

export default reducer;