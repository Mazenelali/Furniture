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
            return error
        }
    },
};
