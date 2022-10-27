import { useEffect, useState } from 'react';

type IProperty = {
  maxLength: number;
  isEmpty: true | null;
  correctEmail: true | null;
};

const errorData = {
  name: { maxLength: 0 } as IProperty,
  location: { maxLength: 0 } as IProperty,
  description: { maxLength: 0 } as IProperty,
  year: { maxLength: 0 } as IProperty,
  email: { maxLength: 0, correctEmail: true, isEmpty: true } as IProperty,
  password: { maxLength: 3, isEmpty: true } as IProperty,
};

type ITypeInput =
  | 'name'
  | 'location'
  | 'description'
  | 'year'
  | 'email'
  | 'password';

const getErrorMessage = (value: string, type: ITypeInput) => {
  let errorMessage = '';
  Object.keys(errorData[type]).forEach((validation) => {
    if (
      validation === 'maxLength' &&
      errorData[type].maxLength &&
      value.length <= errorData[type].maxLength
    ) {
      errorMessage = `длина должна быть больше ${errorData[type].maxLength} символов`;
    }
    if (
      errorData[type].isEmpty &&
      validation === 'isEmpty' &&
      !value.split(' ').join('')
    ) {
      errorMessage = 'Поле не должно быть пустым';
    }
    if (
      errorData[type].correctEmail &&
      validation === 'correctEmail' &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(value).toLowerCase()
      )
    ) {
      errorMessage = 'Некорректный email';
    }
  });

  return errorMessage;
};

const useInput = (type: ITypeInput) => {
  const [valueData, setValueData] = useState<{
    value: string;
    errorMessage: string;
  }>({ value: '', errorMessage: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueData({
      value: e.target.value,
      errorMessage: getErrorMessage(e.target.value, type),
    });
  };

  const handleFocus = () => {
    setValueData((valueData) => ({
      ...valueData,
      errorMessage: getErrorMessage(valueData.value, type),
    }));
  };

  return {
    ...valueData,
    handleChange,
    handleFocus,
  };
};

export default useInput;
