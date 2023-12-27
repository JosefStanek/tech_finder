import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../shared/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../shared/Spinner";
export default function ProtectRoutes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const token = Cookies.get("jwt");
        const res = await axios.post("http://localhost:3000/auth/getme", {
          token,
        });
        if (!res) {
          throw new Error("uživatel nebyl nalezen");
        }
        dispatch(login(res.data.useremail));
        navigate("/");
        return res.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  const { isLogged } = useSelector((state) => state.user);
  return isLogged ? (
    <>
      {isPending && <Spinner />}
      {data && (
        <Layout>
          <Outlet />
        </Layout>
      )}
    </>
  ) : (
    <>{!isPending && <Navigate to={"/auth"} />}</>
  );
}
