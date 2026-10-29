import { usePrefs } from "../lib/prefs.jsx";
import { cvFile, ui } from "../content.js";
import { IconDownload } from "./Icons.jsx";

// "Download CV" button: downloads the CV directly.
export default function CvMenu({ variant = "ghost" }) {
  const { t } = usePrefs();
  return (
    <a className={`btn btn--${variant}`} href={cvFile} download>
      <IconDownload />
      {t(ui.cv)}
    </a>
  );
}
