import styles from "../styles/loading-dots.module.css";

const LoadingDots = ({
  color = "#000",
  style = "small",
}: {
  color: string;
  style: string;
}) => {
  return (
    <span className={style == "small" ? styles.loading2 : styles.loading}>
      {/* <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} /> */}

      <span className={`bg-${color} dark:bg-${color}-200`} />
      <span className={`bg-${color} dark:bg-${color}-200`} />
      <span className={`bg-${color} dark:bg-${color}-200`} />
    </span>
  );
};

export default LoadingDots;

LoadingDots.defaultProps = {
  style: "small",
};
