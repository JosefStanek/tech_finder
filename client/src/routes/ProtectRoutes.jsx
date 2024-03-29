import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../shared/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../store/user/userSlice";
import Spinner from "../shared/Spinner";
export default function ProtectRoutes() {
  const dispatch = useDispatch();

  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.post(
          "http://localhost:3000/auth/getme",
          {
            token,
          },
          {
            withCredentials: true,
          }
        );
        if (!res) {
          throw Error("uživatel nebyl nalezen");
        }
        dispatch(login(res.data.useremail));
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
