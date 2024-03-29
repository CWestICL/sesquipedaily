
import Cookies from "js-cookie";
import api from "./api"
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": Cookies.get("csrftoken")
        }
    };

    const body = JSON.stringify({ username, password, re_password });

    try {
        const res = await api.post("/accounts/register", body, config);

        if (res.data.error) {
            dispatch({
                type: REGISTER_FAIL
            });
        }
        else {
            dispatch({
                type: REGISTER_SUCCESS
            });
        }
    }
    catch {
        dispatch({
            type: REGISTER_FAIL
        });
    }
}