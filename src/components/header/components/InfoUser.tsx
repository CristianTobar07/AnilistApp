"use client";

import { useAppDispatch } from "@/store";
import { setDataUser } from "@/store/auth/authSlice";
import Image from "next/image";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

interface InfoUserProps {
  userName: string;
}

export const InfoUser = (props: InfoUserProps) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("dataUser");
    dispatch(setDataUser(undefined));
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <strong className="uppercase">{props.userName}</strong>
      <Image
        src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx813-TsHyhR3EDd2x.png"
        alt="Profile photo"
        height={100}
        width={100}
        className="h-10 w-10 rounded-full bg-white"
      />
      <IoLogOutOutline
        size={30}
        onClick={handleLogOut}
        className="anilist_icon_active"
      />
    </div>
  );
};
