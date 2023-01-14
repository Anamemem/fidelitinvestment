import React, { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { setToken } from "../services/config";

const userContext = createContext({});
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let details = JSON.parse(localStorage.getItem("getToken"));
    setToken(details?.token);
    setAuth(details);
    setLoading(false);
  }, []);

  const login = async (data) => {
    const Promise = await axios
      .post("/auth/login", data)
      .then((res) => {
        let storage = JSON.stringify(res.data);
        localStorage.setItem("getToken", storage);
        setAuth({ ...res.data });

        setToken(res.data.token);
        return res;
      })
      .catch((e) => {
        const message = e.response?.data?.message || "Network Error";
        throw new Error(message);
      });

    return Promise;
    //after login call setData
  };

  const signUp = async (data) => {
    return axios
      .post("/auth/register", data)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        const message = e.response?.data?.message || "Network Error";
        throw new Error(message);
      });
  };

  const googleAuth = async (res) => {
    return await axios
      .post("/auth/google", { token: res.credential })
      .then((res) => {
        let GToken = JSON.stringify(res.data);
        localStorage.setItem("getToken", GToken);
        setAuth({ ...res.data });
        setToken(res.data.token);
        return res;
      })

      .catch((e) => {
        const message = e.response?.data?.message || "Network Error";
        throw new Error(message);
      });
  };
  const logout = () => {
    localStorage.clear();
    setAuth({});
  };

  return (
    <userContext.Provider value={{ auth, login, signUp, googleAuth, logout }}>
      {!loading && children}
    </userContext.Provider>
  );
}

const useAuthContex = () => useContext(userContext);
export { useAuthContex };