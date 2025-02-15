export const addToCart = (id, info, quantity = 1) => {
    return {
        type: "ADD_TO_CART",
        id: id,
        info: info,
        quantity: quantity
    };
}
export const addToCartQuantity = (id, info, quantity) => {
    return {
        type: "ADD_TO_CART_QUANTITY",
        id: id,
        info: info,
        quantity: quantity
    };
}
export const increaseQuantity = (id) => {
    return {
        type: "INCREASE_QUANTITY",
        id
    };
};

export const decreaseQuantity = (id) => {
    return {
        type: "DECREASE_QUANTITY",
        id
    };
};
export const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id,
    };
};
export const removeAllCart = () => {
    return {
        type: "REMOVE_ALL_CART",
    };
};