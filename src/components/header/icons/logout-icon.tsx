import React from 'react';

type LogoutIconProps = {
  onClick: () => void;
};

export const LogoutIcon = ({ onClick }: LogoutIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    onClick={onClick}>
    <path
      d="M10 2v2h12v16h-12v2h14v-20h-14zm0 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);
