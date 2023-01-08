import { API_URL } from "../../constants/url";
import { USER_LOGIN, USER_REGISTER } from "./actionType";

export const loginSuccess = (payload) => {
  return {
    type: USER_LOGIN,
    err: payload.err,
  };
};

export const loginBosku = (input) => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = input;
      const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const text = await res.json();
        const pesan = text.message
        throw pesan;
      };

      const { access_token, usernameFind } = await res.json();
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("usernameFind", usernameFind);

      const payload = { err: "" };
      return dispatch(loginSuccess(payload));
    } catch (err) {
      //console.log(err, `ini catch nya`)
      const payload = { err };
      return dispatch(loginSuccess(payload));
    }
  };
};

export const registerSuccess = (payload) => {
  return {
    type: USER_REGISTER,
    err: payload.err,
  };
};


export const registerBosku = (input) => {
  return async (dispatch, getState) => {
    try {
      const { username, email, password, phoneNumber, address } = input;
      const res = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phoneNumber,
          address,
        }),
      });

      if (!res.ok) throw new Error("Register Error");

      const payload = { err: "" };
      return dispatch(registerSuccess(payload));
    } catch (err) {
      const payload = { err };
      return dispatch(registerSuccess(payload));
    }
  };
};