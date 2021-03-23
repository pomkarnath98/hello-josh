import styles from "./third.module.scss";

const CourseDetails = () => {
    return(
        <div className={`${styles.flexbox} ${styles.courseDetails}`}>
            <div className={styles.flexbox}>
                <h1>11</h1>
                <div>
                    <div>Courses</div>
                    <div>completed</div>
                </div>
            </div>
            <div className={styles.flexbox}>
                <h1>4</h1>
                <div>
                    <div>Courses</div>
                    <div>in progress</div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails;