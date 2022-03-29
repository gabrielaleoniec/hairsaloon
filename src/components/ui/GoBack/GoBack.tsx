import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import styles from "./GoBack.module.scss";

type GoBack = {
  variant?: "normal" | "orange";
  url?: "string";
};

const GoBack = ({ variant = "normal", url }: GoBack) => {
  const router = useRouter();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (url) {
          return router.push(url);
        }
        return router.back();
      }}
      onKeyUp={(e) => {
        e.preventDefault();
        if (e.key === "Enter") {
          if (url) {
            return router.push(url);
          }
          return router.back();
        }
      }}
      className={`${styles.goBack} ${
        variant === "orange" ? styles.orange : ""
      }`}
      title="Go back"
      aria-label="Go back"
      tabIndex={0}
      role="button"
    >
      <ReactSVG src="/assets/icons/arrow.svg" />
    </div>
  );
};

export default GoBack;
