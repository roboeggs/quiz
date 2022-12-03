import styles from './Quiz.module.scss';
import back from "./../../images/back.svg";
// import forward from "./../../../images/forward.svg";

function Quiz({ percentage, question, onClickVariant, onClicBack }){
    const change = {width: percentage + '%'};
    return (
        <div className={styles.content}>
            <div className={styles.content__progress}>
                <div style={change} className={styles.content__passed}></div>
            </div>
            <h1 className={styles.content__heading}>{question.title}</h1>
            <ul className={styles.content__answers}>
                {question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} className={styles.content__answer + " cursor"}>
                        <p className={styles.content__text}>{text}</p>
                    </li>
                ))}
            </ul>
            <nav className={styles.content__nav}>
                {percentage === 0 ? null :
                    (<img onClick={onClicBack} className={styles.content__arrow + ' cursor animation'} src={back} alt="Arrow back" />)
                }
            </nav>
        </div>
    );
}

export default Quiz;