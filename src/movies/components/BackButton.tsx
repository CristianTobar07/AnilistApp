"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back(); // Retrocede si hay historial
    } else {
      router.push("/"); // Redirige a la página principal o una predeterminada
    }
  };

  return (
    <div
      className="flex w-full justify-start my-3 text-white"
      onClick={handleBack}
    >
      <IoChevronBackOutline size={40} className="anilist_icon_active" />
    </div>
  );
}
