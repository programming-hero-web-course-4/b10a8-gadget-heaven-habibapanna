import { useState } from "react";
import { toast } from "react-toastify";

const getStoredAddList = () => {
const storedListStr = localStorage.getItem('add-list');
if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
}
else{
    return [];
}
}

const addToStoredAddList = (id) => {
    const storedList = getStoredAddList();
if(storedList.includes(id)){
    toast('Already exists in the card list!');
}
else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('add-list', storedListStr);
    toast('This product is added to card!')
}
}

const getStoredAddWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
    }

    const addToStoredAddWishList = (id) => {
        const storedWishList = getStoredAddWishList();
    if(storedWishList.includes(id)){
        toast('Already exists in the wish list!');
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast('This product is added to wish list!');
    }
    }

const removeAddList = (id) => {
    const storedList = getStoredAddList();
    const remaining = storedList.filter(product_id => product_id != id);
    localStorage.setItem('add-list', JSON.stringify(remaining));
    toast('This product is remove from card!');
};


export { addToStoredAddList, addToStoredAddWishList, getStoredAddList, getStoredAddWishList, removeAddList }