import CourseDetails from "./CourseDetails";
import LearnMore from "./LearnMore";
import Search from "./Search";
import Statistics from "./Statistics";
import styles from "./third.module.scss";

const Third = () => {
    return (
        <div className={styles.third}>
            <Search/>
            <CourseDetails/>
            <Statistics/>
            <LearnMore/>
        </div>
    )
}

export default Third;