import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://assignment-11-tau.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const authInfo = useContext(AuthContext);
  // const {logoutUser} = useContext(AuthContext)

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          authInfo?.logoutUser().then(() => {});
        }
      }
    );
  }, [authInfo]);

  return axiosSecure;
};

export default useAxiosSecure;
