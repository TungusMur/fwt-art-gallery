/* eslint-disable no-param-reassign */
import React from 'react';

type IXСoordinate = { xMove: number | null; xStart: number | null };

const xСoordinate: IXСoordinate = {
  xMove: null,
  xStart: null,
};

const handleTouchStart = (
  e: React.TouchEvent,
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  xСoordinate.xStart = e.touches[0].clientX;
  if (ref.current) {
    ref.current.style.transition = '0s left';
  }
};

const handleTouchMove = (
  e: React.TouchEvent,
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (ref.current && xСoordinate.xMove) {
    const offset =
      ref.current.offsetLeft + e.touches[0].clientX - xСoordinate.xMove;

    ref.current.style.left = `${
      Math.abs(offset) < ref.current.offsetWidth / 2
        ? offset
        : ref.current.offsetLeft
    }px`;
  }
  xСoordinate.xMove = e.touches[0].clientX;
};

const handleTouchEnd = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  setActiveItem: (
    cb: (state: { activeItem: number; action: boolean }) => {
      activeItem: number;
      action: boolean;
    }
  ) => void,
  dataLength: number
) => {
  if (ref.current) {
    ref.current.style.transition = '0.4s left';
    ref.current.style.left = '0px';
    if (
      xСoordinate.xStart &&
      xСoordinate.xMove &&
      ref.current.offsetWidth / 3 <
        Math.abs(xСoordinate.xStart - xСoordinate.xMove)
    ) {
      const difference = xСoordinate.xStart - xСoordinate.xMove;
      if (difference > 0) {
        setActiveItem(({ activeItem }) => ({
          activeItem: activeItem === dataLength - 1 ? 0 : activeItem + 1,
          action: true,
        }));
      } else {
        setActiveItem(({ activeItem }) => ({
          activeItem: activeItem === 0 ? dataLength - 1 : activeItem - 1,
          action: false,
        }));
      }
    }
  }
  xСoordinate.xMove = null;
};

export { handleTouchStart, handleTouchMove, handleTouchEnd };
