import { useEffect, useState } from 'react';

const useDrop = (file: File) => {
  const [errorMessage, setErroreMessage] = useState('');
  useEffect(() => {
    console.log(file);
  }, [errorMessage]);
  return errorMessage;
};

export default useDrop;
