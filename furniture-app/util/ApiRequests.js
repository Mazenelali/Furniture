import axios from "axios";

export const requests = {
    addUser: async (daTa) => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/register`,
                daTa
            );
            return response;
        } catch (error) {
            return error;
        }
    },
    getAllProduct: async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/product`
            );
            return response.data;
        } catch (error) {
            return error;
        }
    },
    getProductById: async (id) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/product/${id}`
            );
            return response.data;
        } catch (error) {
            return error;
        }
    },
    getFirstProduct: async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/firstThreeProduct`
            );
            return response;
        } catch (error) {
            return error;
        }
    },

    searchProduct : async (query) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/search?searchQuery=${query}`
            );
            return response;
        } catch (error) {
            return error;
        }
    },

    getProductByCategoryId: async (id) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/productByCategories/${id}`
            );
            return response;
        } catch (error) {
            return error;
        }
    },
    getAllCategory: async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/getAllCategory`
            );
            return response;
        } catch (error) {
            return error;
        }
    },

    getOrderByIdUser: async (id) => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/getOrderByIDOfUser/${id}`
            );
            return response.data;
        } catch (error) {
            return error;
        }
    },
};
