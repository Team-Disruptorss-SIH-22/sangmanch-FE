import React, { useEffect, useContext } from "react";
import axios from "axios";
import authContext from "context/auth/authContext";
import { toast } from "react-toastify";

const Verify = (props) => {
  const { isAuthenticated } = useContext(authContext);
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/login");
    }
  }, [isAuthenticated, props.history]);

  useEffect(() => {
    const token = props.match.params.token;
    async function verifyUser() {
      try {
        const res = await axios.get(
          `https://sangmanch-be.onrender.com/api/auth/confirmEmail/${token}`
        );
        toast.success("Email Verified Successfully");
        props.history.push("/login");
      } catch (err) {
        toast.error(err.response.data.msg);
      }
    }
    verifyUser();
  }, []);

  return <div></div>;
};

export default Verify;
