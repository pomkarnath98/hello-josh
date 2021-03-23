import Navbar from "../Navbar/Navbar"
import Second from "../Second/Second"
import Third from "../Third/Third"
import styles from "./dashboard.module.scss";

const Dashboard = () => {
    return (
        <div className={styles.flexbox} >
            <Navbar/>
            <Second/>
            <Third/>
        </div>
    )
}

export default Dashboard;