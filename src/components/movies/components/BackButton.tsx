"use client";

import { useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      // Come back when there is history
      router.back();
    } else {
      // Redirect to main page
      router.push("/");
    }
  };

  return (
    <div
      className="flex w-full justify-start my-3 text-white hover:text-yellow-500"
      onClick={handleBack}
    >
      <IoChevronBackOutline size={40} className="anilist_icon_active" />
    </div>
  );
}
