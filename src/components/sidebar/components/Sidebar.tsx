"use client"; // Asegúrate de que este componente se ejecute en el cliente

import React, { useState, useEffect, useRef } from "react";
import {
  IoHeartOutline,
  IoLogoReact,
  IoMenuOutline,
  IoVideocamOutline,
} from "react-icons/io5";

import { useParams } from "next/navigation";
import { FilterByCategories } from "./FilterByCategories";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: `/dashboard/movies/1`,
    icon: <IoVideocamOutline size={40} />,
    title: "Movies",
    subTitle: "Explore movies",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} />,
    title: "Favorites",
    subTitle: "Saved movies",
  },
];

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const param = useParams();

  useEffect(() => {
    if (param.page) {
      menuItems[0].path = `/dashboard/movies/${param.page}`;
    }
  }, [param]);

  // Función para alternar el estado de apertura/cierre del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el sidebar cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        onClick={toggleSidebar} // Cambié el botón para usar la función toggle
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center mt-2 mx-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <IoMenuOutline size={25} className="text-gray-900"/>
      </button>

      <aside
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-80 h-screen transition-transform md:relative lg:relative ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-2 py-2 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
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

            <FilterByCategories />

            <div className="w-full px-6">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path} {...item} />
              ))}
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};
