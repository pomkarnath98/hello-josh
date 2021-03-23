import styles from "./second.module.scss";
import josh from "../../Utils/joshImage.PNG";

const Top = () => (
    <div className={styles.top}>
        <div>
            <h2 className={styles.helloJosh}>Hello Josh!</h2>
            <div>It’s good to see you again.</div>
        </div>
        <div>
            <img src={josh} alt="josh" />
        </div>
    </div>
)

export default Top;