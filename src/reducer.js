export const initialState = { //ek data layer ha jo storage k liye hogi
  basket: [],
  user: null
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
     // jb add to basket button dabayega function dispatches and shoot in reducer we listen to the action and update the state
  switch (action.type) {
    case "SET_USER":
  return {
    ...state,
    user: action.user,
  };
    case "ADD_TO_BASKET":
            // logic for adding item in basket

      return {
        ...state, //returning a current exact state matlb jo abhii mojooda ha wo bhi dey

        basket: [...state.basket, action.item] //or ..state.basket mtlb basket ma joo ha usko milakr action.item add kr
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id); //checking to see if product exist
      if (index >= 0) {
        let newBasket = [...state.basket]; //Cloning a basket
        newBasket.splice(index, 1); //basket k jis index pr item mila ha usko kaat kr baki cheez chorde sirf   

        return { ...state, basket: newBasket };
      } else {
        console.warn(`Can't remove product as ${action.id} is not in the basket`);
        return state;
      }
    default:
      return state;
  }
}

export default reducer;
