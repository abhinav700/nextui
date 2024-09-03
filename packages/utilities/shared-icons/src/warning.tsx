import React from "react";

import {IconSvgProps} from "./types";
export const WarningIcon = (
  props: IconSvgProps & {
    className?: string;
  },
) => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.76 13.92L14.36 2.4C13.5 0.85 12.31 0 11 0C9.69 0 8.5 0.85 7.64 2.4L1.24 13.92C0.43 15.39 0.340001 16.8 0.99 17.91C1.64 19.02 2.92 19.63 4.6 19.63H17.4C19.08 19.63 20.36 19.02 21.01 17.91C21.66 16.8 21.57 15.38 20.76 13.92ZM10.25 7C10.25 6.59 10.59 6.25 11 6.25C11.41 6.25 11.75 6.59 11.75 7V12C11.75 12.41 11.41 12.75 11 12.75C10.59 12.75 10.25 12.41 10.25 12V7ZM11.71 15.71C11.66 15.75 11.61 15.79 11.56 15.83C11.5 15.87 11.44 15.9 11.38 15.92C11.32 15.95 11.26 15.97 11.19 15.98C11.13 15.99 11.06 16 11 16C10.94 16 10.87 15.99 10.8 15.98C10.74 15.97 10.68 15.95 10.62 15.92C10.56 15.9 10.5 15.87 10.44 15.83C10.39 15.79 10.34 15.75 10.29 15.71C10.11 15.52 10 15.26 10 15C10 14.74 10.11 14.48 10.29 14.29C10.34 14.25 10.39 14.21 10.44 14.17C10.5 14.13 10.56 14.1 10.62 14.08C10.68 14.05 10.74 14.03 10.8 14.02C10.93 13.99 11.07 13.99 11.19 14.02C11.26 14.03 11.32 14.05 11.38 14.08C11.44 14.1 11.5 14.13 11.56 14.17C11.61 14.21 11.66 14.25 11.71 14.29C11.89 14.48 12 14.74 12 15C12 15.26 11.89 15.52 11.71 15.71Z" />
    </svg>
  );
};
