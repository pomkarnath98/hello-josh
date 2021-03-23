import styles from "./third.module.scss";
import search from "../../Utils/search.svg";
import notification from "../../Utils/notification.png";
import downArrow from "../../Utils/downArrow.svg";
import profilePic from "../../Utils/profilePic.png";

const Search = () => {
    const msg = 1;
    return (
        <div className={styles.flexbox}>
            <div className={styles.searchDiv}>
                <img src={search} alt="search" />
                <input />
            </div>
            <div className={styles.notification}>
                <img src={notification} alt="notification" />
                <div style={msg ? { display: "inline" } : { display: "none" }}>{msg}</div>
            </div>
            <div className={styles.profile}>
                <img src={profilePic} alt="profilePic" />
                <img src={downArrow} alt="downArrow" />
            </div>
        </div>
    )
}

export default Search;