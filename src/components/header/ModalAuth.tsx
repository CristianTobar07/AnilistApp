"use client";

import React, { useState } from "react";
import "./styles/ModalAuth.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";
import { showModalAuth } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store";

export const ModalAuth = () => {
  const dispatch = useAppDispatch();
  const [isLogin, setisLogin] = useState(true);

  return (
    <div className="main_container_modal_auth">
      <div className="flex w-full h-full items-start mt-4 justify-center">
        <div className="container_modal">
          <button
            className="flex items-center mt-4 ml-2 active:opacity-5"
            onClick={() => dispatch(showModalAuth(false))}
          >
            <IoChevronBackOutline size={30} /> <span>Back</span>
          </button>

          <div className="flex max-w-screen-sm text-white text-sm items-center justify-center">
            <div>
              <button
                className={`py-2 px-4 rounded-sm bg-gray-900  ${
                  isLogin && "button_active_modal"
                } `}
                onClick={() => setisLogin(true)}
              >
                Sign up
              </button>
              <button
                className={`py-2 px-4 rounded-sm bg-gray-900 ${
                  !isLogin && "button_active_modal"
                } `}
                onClick={() => setisLogin(false)}
              >
                Log In
              </button>
            </div>
          </div>
          {isLogin ? <FormRegister /> : <FormLogin />}
        </div>
      </div>
    </div>
  );
};
