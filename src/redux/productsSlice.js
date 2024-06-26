import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        createProduct: (state, action) => { },
        readProduct: (state, action) => { },
        updateProduct: (state, action) => { },
        deleteProduct: (state, action) => { }
    }
})

export const { createProduct, readProduct, updateProduct, deleteProduct } = productsSlice.actions

export default productsSlice.reducer