// AppWrapper.jsx
import { useLanguage } from "./context/LanguageProvider";
import App from "./App";

function AppWrapper() {
  const { language } = useLanguage();
  
  return <App language={language} />;
}

export default AppWrapper;