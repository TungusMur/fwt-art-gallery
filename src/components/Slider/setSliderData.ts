let draftId: number | undefined;

const setSliderData = (data: string[], activeItem: number, action: boolean) => {
  if (data.length === 1) {
    return [];
  }

  if (data.length === 2 || data.length === 3) {
    const dataSlider = [...data, ...data];

    if (draftId === undefined) {
      draftId = activeItem;
    } else {
      draftId += action ? 1 : -1;
      if (draftId === -1) {
        draftId = data.length * 2 - 1;
      }
      if (draftId === data.length * 2) {
        draftId = 0;
      }
    }

    return [
      {
        src: dataSlider[draftId === 0 ? dataSlider.length - 1 : draftId - 1],
        id: draftId === 0 ? dataSlider.length - 1 : draftId - 1,
      },
      { src: dataSlider[draftId], id: draftId },
      {
        src: dataSlider[draftId === dataSlider.length - 1 ? 0 : draftId + 1],
        id: draftId === dataSlider.length - 1 ? 0 : draftId + 1,
      },
    ];
  }

  return [
    {
      src: data[activeItem === 0 ? data.length - 1 : activeItem - 1],
      id: activeItem === 0 ? data.length - 1 : activeItem - 1,
    },
    { src: data[activeItem], id: activeItem },
    {
      src: data[activeItem === data.length - 1 ? 0 : activeItem + 1],
      id: activeItem === data.length - 1 ? 0 : activeItem + 1,
    },
  ];
};

export default setSliderData;
