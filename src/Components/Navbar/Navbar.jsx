import home from "../../Utils/home.svg";
import degree from "../../Utils/degree.svg";
import user from "../../Utils/user.svg";
import email from "../../Utils/email.svg";
import exit from "../../Utils/exit.svg";
import settings from "../../Utils/settings.png";
import styles from "./navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.background}>
            <div>F.</div>
            <div className={styles.middleicons}>
                <div>
                    <img src={home} />
                </div>
                <div>
                    <img src={degree} />
                </div>
                <div>
                    <img src={user} />
                </div>
                <div>
                    <img src={email} />
                </div>
                <div>
                    <img src={settings} />
                </div>
            </div>
            <div>
                <img src={exit} />
            </div>
        </div>
    )
}

export default Navbar;
