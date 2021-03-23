import styles from "./third.module.scss";
import graph from "../../Utils/graph.svg";
import downArrow from "../../Utils/downArrow.svg"; 

const Statistics = () => {
    return(
        <div className={styles.statistics}>
            <h3>Your Statistics</h3>
            <div className={styles.flexbox}>
                <div className={styles.flexbox}>
                    <h5 className={styles.allCourses}>Learning Hours</h5>
                    <h5>My Courses</h5>
                </div>
                <div>
                    <b>Weekly</b>
                    <img src={downArrow} alt="downArrow" />
                </div>
            </div>
            <img src={graph} alt="graph" />
        </div>
    )
}
export default Statistics;