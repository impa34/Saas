// hooks/useForceUpdate.js
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageProvider';

export const useForceUpdate = () => {
  const { update } = useLanguage();
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setForceUpdate(prev => prev + 1);
  }, [update]);

  return forceUpdate;
};