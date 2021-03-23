import spain from "../../Utils/spainFlag.jpg";
import progress from "../../Utils/progress.svg";
import leftArrow from "../../Utils/leftArrow.svg";
import rightArrow from "../../Utils/rightArrow.svg";
import styles from "./second.module.scss";

const Spanish = () => {
    return (
        <>
            <div className={`${styles.flexbox} ${styles.flagProgressBox}`}>
                <div className={styles.flexbox}>
                    <div>
                        <img className={styles.spain} src={spain} alt="spain" />
                    </div>
                    <div>
                        <h5>Spanish B2</h5>
                        <div>by Alejandro Velazquez</div>
                    </div>
                    <div className={styles.progress}>
                        <img src={progress} alt="progress" />
                        <div>83%</div>
                    </div>
                    <div>
                        <button>Continue</button>
                    </div>
                </div>
                <div>
                    <img src={leftArrow} alt="left-arrow" />
                    <img src={rightArrow} alt="right-arrow" />
                </div>
            </div>
        </>
    )
}

export default Spanish;