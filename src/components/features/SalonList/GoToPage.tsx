import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import styles from "./GoToPage.module.scss";
import { SalonType } from "../../../interfaces/salon";

type GoToPage = {
  slug: SalonType["slug"];
};

const GoToPage = ({ slug }: GoToPage) => {
  const router = useRouter();
  return (
    <div
      className={styles.arrowRight}
      onClick={() => {
        router.push(`/${slug}`);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          router.push(`/${slug}`);
        }
      }}
      tabIndex={0}
      role="button"
    >
      <ReactSVG src="/assets/icons/arrow_s_r.svg" width={8} height={11} />
    </div>
  );
};

export default GoToPage;
