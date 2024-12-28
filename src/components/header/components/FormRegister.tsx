"use client";

import { useAppDispatch } from "@/store";
import { DataUser, setDataUser, showModalAuth } from "@/store/auth/authSlice";
import React, { ChangeEvent, FormEvent, useState } from "react";

export const FormRegister = () => {
  const dispatch = useAppDispatch();

  const [formValues, setformValues] = useState<DataUser>({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof DataUser
  ) => {
    setformValues({
      ...formValues,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("dataUser", JSON.stringify(formValues));
    dispatch(setDataUser(formValues));
    dispatch(showModalAuth(false));
  };
  return (
    <div className="flex flex-col mt-4 max-w-screen-sm  justify-center">
      <h1 className="flex justify-center font-thin w-full mt-5">
        We love habing you back
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col  gap-3 justify-center items-center w-full text-gray-800 text-sm mt-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-72 md:w-80 lg:w-80 bg-white py-2 px-3 rounded-sm active:border-non focus:outline-none"
          onChange={(e) => handleChangeForm(e, "name")}
          required
        />
        <input
          type="text"
          placeholder="Email"
          className="w-72 md:w-80 lg:w-80 bg-white py-2 px-3 rounded-sm active:border-non focus:outline-none"
          onChange={(e) => handleChangeForm(e, "email")}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-72 md:w-80 lg:w-80 bg-white py-2 px-3 rounded-sm active:border-non focus:outline-none"
          onChange={(e) => handleChangeForm(e, "password")}
          required
        />

        <button type="submit" className="w-72 md:w-80 lg:w-80 py-2 px-2 bg-yellow-500">
          Continue
        </button>
      </form>
    </div>
  );
};
