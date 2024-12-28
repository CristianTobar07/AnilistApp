"use client";

import React from "react";
import { ModalAuth } from "./ModalAuth";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { showModalAuth } from "@/store/auth/authSlice";

export const Auth = () => {
  const dispatch = useAppDispatch();

  const { isOpenModalAuth } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => dispatch(showModalAuth(true))}
        className="w-full  border border-gray-50 px-4 py-2 rounded-xl text-sm active:opacity-10 hover:bg-yellow-700 hover:border-yellow-700"
      >
        Login
      </button>

      {isOpenModalAuth && <ModalAuth />}
    </div>
  );
};
