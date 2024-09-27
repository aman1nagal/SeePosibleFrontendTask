import { useState, useEffect } from 'react';

const useTokenCheck = (tokenKey: string): boolean => {
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    setHasToken(!!token);
  }, [tokenKey]);

  return hasToken;
};

export default useTokenCheck;