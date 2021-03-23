import styles from "./third.module.scss";
import brainbook from "../../Utils/brainbook.svg";

const LearnMore = () => {
    return(
        <div className={`${styles.flexbox} ${styles.learnMore}`}>
            <div>
                <h2>Lern even more!</h2>
                <div>Unlock premium features</div>
                <div>only for $9.99 per month.</div>
                <button><b>Go Premium</b></button>
            </div>
            <div>
                <img src={brainbook} alt="brainbook" />
            </div>
        </div>
    )
}

export default LearnMore