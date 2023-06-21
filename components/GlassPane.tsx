import clsx from "clsx";
import "../styles/global.css";

const GlassPane = ({ children, className }) => (
  <div
    className={clsx(
      "glass rounded-2xl border-solid border-2 border-gray-200",
      className
    )}
  >
    {children}
  </div>
);

export default GlassPane;
