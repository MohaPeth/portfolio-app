import { ComponentPropsWithoutRef } from "react";

export const ItemIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 250"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g
        transform="translate(0.000000,287.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M20 2018 l0 -832 475 475 c262 261 480 482 486 493 10 16 -30 60
-327 357 l-339 339 -147 0 -148 0 0 -832z"
          fill="currentColor"
        />
        <path
          d="M981 2833 c8 -9 160 -163 338 -341 l324 -324 -812 -812 -811 -811 0
-268 0 -267 274 0 274 0 830 830 c457 456 833 830 836 830 4 0 144 -138 311
-306 l305 -306 0 896 0 896 -941 0 c-884 0 -941 -1 -928 -17z"
          fill="currentColor"
        />
        <path
          d="M1726 526 c-278 -278 -506 -508 -506 -511 0 -3 367 -5 815 -5 l815 0
0 203 0 202 -309 309 -308 308 -507 -506z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
