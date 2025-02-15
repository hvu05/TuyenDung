const cartReducer = (state = [], action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ];
            
        case "ADD_TO_CART_QUANTITY":
            return state.map(item =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        case "INCREASE_QUANTITY":
            return state.map(item =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case "DECREASE_QUANTITY":
            return state.map(item =>
                item.id === action.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.payload); // Xóa sản phẩm theo id
        
        case "REMOVE_ALL_CART":
            state = [];
            return state;

        default:
            return state;
    }
}
export default cartReducer;