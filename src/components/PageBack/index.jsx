import { FaCaretSquareLeft } from "react-icons/fa";
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom';
export function PageBack({title}){
    const navigate = useNavigate();
    return(
        <div className={styles.div_title_page} onClick={() => {
            navigate(-1)
        }}>
            <FaCaretSquareLeft className={styles.icon}/>
            <h3 className={styles.title_page}>{title}</h3>
        </div>
    )
}