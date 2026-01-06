import styles from "./Container.module.css";
function Container({ children }) {
  return <div classNameName={`${styles.container}`}>{children}</div>;
}
export default Container;
