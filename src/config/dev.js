const devConfig = {
    apiEndpoints : {
        product: "http://localhost:3001/product",
        productById: (id) => `http://localhost:3001/product/${id}`,
        user: "http://localhost:3001/user",
    }
}

export default devConfig;