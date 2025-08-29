// hooks/useLanguageRefresh.js
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageProvider';

export const useLanguageRefresh = () => {
  const { language } = useLanguage();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setRefreshKey(prev => prev + 1);
  }, [language]);

  return refreshKey;
};