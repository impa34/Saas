// components/WithLanguage.js
import { useLanguage } from "../context/LanguageProvider";

const WithLanguage = ({ children }) => {
  const { language } = useLanguage();
  return <div key={language}>{children}</div>;
};

export default WithLanguage;