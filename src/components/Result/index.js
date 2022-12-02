import styles from './Result.module.scss';

function Result( {correct, count, replay} ){
    return (
        <div className={styles.result}>
            <img className={styles.result__img} src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Картинка с серпантином" />
            <h2 className={styles.result__h2}>You guessed {correct} out of {count} answers</h2>
            <button className={styles.result__button + ' cursor'} onClick={replay}>try again</button>
        </div>
);
}


export default Result;