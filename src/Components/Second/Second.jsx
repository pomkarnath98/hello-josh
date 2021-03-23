import Course from "./Course";
import styles from "./second.module.scss";
import Spanish from "./Spanish";
import Top from "./Top";

const Second = () => {
    return (
        <div className={styles.second}>
            <Top/>
            <Spanish/>
            <Course/>
        </div>
    )
}

export default Second;