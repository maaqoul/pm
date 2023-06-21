import clsx from "clsx";

const Card = ({ children, className }) => (
  <div className={clsx("rounded-3xl px-10 drop-shadow-xl bg-white", className)}>
    {children}
  </div>
);

export default Card;
