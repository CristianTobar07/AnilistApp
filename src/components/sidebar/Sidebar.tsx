"use client";

import {
  IoHeartOutline,
  IoLogoReact,
  IoVideocamOutline,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const menuItems = [
  {
    path: `/dashboard/movies/1`,
    icon: <IoVideocamOutline size={40} />,
    title: "Movies",
    subTitle: "Generación Estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} />,
    title: "Favorites",
    subTitle: "Global State",
  },
];

export const Sidebar = () => {
  const param = useParams();

  useEffect(() => {
    if (param.page) {
      menuItems[0].path = `/dashboard/movies/${param.page}`;
    }
  }, [param]);

  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Next.js</span>
        </h1>

        <p className="text-slate-500 text-sm">App to show movies</p>

        <small className="text-slate-500 text-xs">
          Author:
          <i> Cristian A. Tobar Mosquera</i>
        </small>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome,</p>
        <a href="#" className="inline-flex space-x-2 items-center"></a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
