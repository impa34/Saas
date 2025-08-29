import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="text-center py-6 text-gray-400 text-sm bg-white dark:bg-gray-900">
      <div className="mb-2 space-x-4">
        <Link to="/pricing" className="hover:text-gray-900 dark:text-white">{t("footer.pricing")}</Link>
        <Link to="/about" className="hover:text-gray-900 dark:text-white">{t("footer.about")}</Link>
        <Link to="/contact" className="hover:text-gray-900 dark:text-white">{t("footer.contact")}</Link>
        <Link to="/privacy" className="hover:text-gray-900 dark:text-white">{t("footer.privacy")}</Link>
        <Link to="/terms" className="hover:text-gray-900 dark:text-white">{t("footer.terms")}</Link>
      </div>
      <p>{t("footer.copyright")}</p>
    </footer>
  );
}

export default Footer;
