import React, { PureComponent } from "react";

interface BanerBagroundMovieProps {
  color: string;
}

export default function BanerBagroundMovie(props: BanerBagroundMovieProps) {
  return (
    <div
      className="fixed ml-12 w-full max-w-full overflow-x-hidden"
      style={{
        height: "100vh",
        background: `linear-gradient(to right, ${props.color}, #00264d)`,
      }}
    ></div>
  );
}
