import React, { PureComponent } from "react";

interface BanerBagroundMovieProps {
  color: string;
}

export default function BanerBagroundMovie(props: BanerBagroundMovieProps) {
  return (
    <div
      className="absolute w-full "
      style={{
        width: "78%",
        height: "100vh",
        background: `linear-gradient(to right, ${props.color}, #00264d)`,
      }}
    ></div>
  );
}
