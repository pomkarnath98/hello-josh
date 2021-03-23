import styles from "./second.module.scss";
import figma from "../../Utils/figma.svg";
import clock from "../../Utils/clock.svg";
import photography from "../../Utils/photography.jpg";
import instagram from "../../Utils/instagram.png";
import pencil from "../../Utils/pencil.PNG";
import photoshop from "../../Utils/photoshop.png";
import fire from "../../Utils/fire.svg";

const Course = () => {

    const courses = [
        {
            img: figma,
            name: "Learn Figma",
            author: "Christopher Morgan",
            duration: "6h 30min",
            rating: "4.9"
        },
        {
            img: photography,
            name: "Analog photography",
            author: "Gordon Norman",
            duration: "3h 15min",
            rating: "4.7"
        },
        {
            img: instagram,
            name: "Master Instagram",
            author: "Sophie Gill",
            duration: "7h 40min",
            rating: "4.6"
        },
        {
            img: pencil,
            name: "Basics of drawing",
            author: "Jean Tate",
            duration: "11h 30min",
            rating: "4.8"
        },
        {
            img: photoshop,
            name: "Photoshop - Essence",
            author: "David Green",
            duration: "5h 35min",
            rating: "4.7"
        },
    ]

    return (
        <div className={styles.course}>
            <h3>Courses</h3>
            <div className={styles.flexbox}>
                <h5 className={styles.allCourses}>All Courses</h5>
                <h5>The Newest</h5>
                <h5>Top Rated</h5>
                <h5>Most Popular</h5>
            </div>
            {courses.map(e => (
                <div className={`${styles.flexbox} ${styles.courseList}`} key={e.name + e.author}>
                    <div>
                        <img src={e.img} alt="icon" />
                    </div>
                    <div>
                        <b>{e.name}</b>
                        <div>by {e.author}</div>
                    </div>
                    <div>
                        <img src={clock} alt="clock" />
                        <span>{e.duration}</span>
                    </div>
                    <div>
                        <img src={fire} alt="fire" />
                        <span>{e.rating}</span>
                    </div>
                    <div>
                        <button><b>View Course</b></button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Course