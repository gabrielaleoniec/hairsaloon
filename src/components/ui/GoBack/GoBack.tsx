import { useRouter } from "next/router";
import { ReactSVG } from "react-svg";
import styles from "./GoBack.module.scss";

type GoBack = {
  variant?: "normal" | "orange";
};

const GoBack = ({ variant = "normal" }: GoBack) => {
  const router = useRouter();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
      className={`${styles.goBack} ${
        variant === "orange" ? styles.orange : ""
      }`}
      title="Go back"
      aria-label="Go back"
    >
      <ReactSVG src="/assets/icons/arrow.svg" />
    </div>
  );
};

export default GoBack;
