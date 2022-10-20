// const setSliderData = (data: string[], activeItem: number) => {
//   const sliderData: { src: string; id: number }[] = [];

//   if (data.length < 5) {
//     return sliderData;
//   }

//   const backPart =
//     activeItem < 2
//       ? data.slice(activeItem - 2)
//       : data.slice(activeItem - 2, activeItem);
//   const frontPart =
//     data.length - 3 < activeItem
//       ? data.slice(0, activeItem - data.length + 3)
//       : data.slice(activeItem + 1, activeItem + 3);

//   if (activeItem === 1) {
//     const mainPart = data.slice(0, activeItem + 1);
//     return [...backPart, ...mainPart, ...frontPart];
//   }

//   if (activeItem === data.length - 2) {
//     const mainPart = data.slice(activeItem);
//     return [...backPart, ...mainPart, ...frontPart];
//   }

//   const mainPart = [data[activeItem]];

//   return [...backPart, ...mainPart, ...frontPart];
// };

const setSliderData = (data: string[], activeItem: number) => {
  if (data.length === 1) {
    return [];
  }

  if (data.length === 2) {
    const dataSlider = [...data, ...data];
    return [
      {
        src: dataSlider[
          activeItem === 1 ? dataSlider.length - 1 : activeItem - 2
        ],
        id: activeItem === 1 ? dataSlider.length - 1 : activeItem - 2,
      },
      { src: dataSlider[activeItem - 1], id: activeItem - 1 },
      {
        src: dataSlider[activeItem === dataSlider.length ? 0 : activeItem],
        id: activeItem === dataSlider.length ? 0 : activeItem,
      },
    ];
  }

  return [
    {
      src: data[activeItem === 1 ? data.length - 1 : activeItem - 2],
      id: activeItem === 1 ? data.length - 1 : activeItem - 2,
    },
    { src: data[activeItem - 1], id: activeItem - 1 },
    {
      src: data[activeItem === data.length ? 0 : activeItem],
      id: activeItem === data.length ? 0 : activeItem,
    },
  ];
};

export default setSliderData;
