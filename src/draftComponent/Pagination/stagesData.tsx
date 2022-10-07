type IData = {
  title: string | number;
  id: string | number;
  handleClickItem: () => void;
};
type IGetStageData = (
  countStage: number,
  activeStage: number,
  handleClick: (e: number) => void
) => IData[];

const getStageData: IGetStageData = (countStage, activeStage, handleClick) => {
  const data: IData[] = [];

  if (countStage <= 6) {
    for (let i = 0; i < countStage; i += 1) {
      data.push({
        title: i + 1,
        id: i,
        handleClickItem: () => {
          handleClick(i);
        },
      });
    }
  } else {
    data.push({
      title: 1,
      id: 0,
      handleClickItem: () => {
        handleClick(0);
      },
    });

    if (activeStage < 3) {
      for (let i = 1; i < 4; i += 1) {
        data.push({
          title: i + 1,
          id: i,
          handleClickItem: () => {
            handleClick(i);
          },
        });
      }

      data.push({
        title: '...',
        id: `...${activeStage + 1}`,
        handleClickItem: () => {
          handleClick(activeStage + 3);
        },
      });
    } else if (countStage - 4 < activeStage) {
      data.push({
        title: '...',
        id: `...${activeStage - 1}`,
        handleClickItem: () => {
          handleClick(activeStage - 3);
        },
      });

      for (let i = countStage - 4; i < countStage - 1; i += 1) {
        data.push({
          title: i + 1,
          id: i,
          handleClickItem: () => {
            handleClick(i);
          },
        });
      }
    } else {
      data.push({
        title: '...',
        id: `...${activeStage - 1}`,
        handleClickItem: () => {
          handleClick(activeStage - 3);
        },
      });

      for (let i = activeStage - 1; i <= activeStage + 1; i += 1) {
        data.push({
          title: i + 1,
          id: i,
          handleClickItem: () => {
            handleClick(i);
          },
        });
      }

      data.push({
        title: '...',
        id: `...${activeStage + 1}`,
        handleClickItem: () => {
          handleClick(activeStage + 3);
        },
      });
    }

    data.push({
      title: countStage,
      id: countStage - 1,
      handleClickItem: () => {
        handleClick(countStage - 1);
      },
    });
  }

  return data;
};

export default getStageData;
