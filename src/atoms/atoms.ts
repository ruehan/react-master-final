import { atom } from "recoil";

export const tabState = atom({
    key: 'tabState',
    default: 'Popular'
})

export const movieState = atom({
    key: 'movieState',
    default: ''
})

export const modalState = atom({
    key: 'modalState',
    default: false
})