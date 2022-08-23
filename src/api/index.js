import axios from "axios";

const URL = 'https://api.spacexdata.com/v3';

export const getRokets = async () => {
    try{
        const res = await axios.get(`${URL}/rockets`)
            return {
                rokets: res.data
            }
    } catch (err) {
        throw err;

    }
}