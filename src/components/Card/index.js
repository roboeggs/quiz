import styles from './Card.module.scss';

const tagHandler = (index) => {
    switch (index) {
        case 'blue':
            return styles.card__text_blue;
        case 'red':
            return styles.card__text_red;
        case 'bard':
            return styles.card__text_bard;
        case 'br':
            return styles.card__text_br;
        case 'black': 
            return styles.card__text_black;
        case 'green':
            return styles.card__text_green;
        case 'space':
            return styles.card__text_space;
        default:

    }
    return;
}

const headerHandler = (index) =>{
    switch (index) {
        case 'blue':
            return styles.card__main_blue;
        case 'red':
            return styles.card__main_red;
        case 'green':
            return styles.card__main_green;
        case 'yellow':
            return styles.card__main_yellow;
        default:
    }
    return;
}

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <h2 className={styles.card__main +  " " + headerHandler(props.packet.color)}>{props.packet.title}</h2>
            </div>
            <div className={styles.card__code}>
                <p className={styles.card__text}>
                {Object.values(props.packet.text).map((index) => 
                    <span className={tagHandler(Object.keys(index)[0])}>{Object.values(index)}</span>
                )}
                </p>
                <button onClick={props.onClickOpen} className={styles.card__button + ' cursor'}>Try</button>
            </div>
        </div>
);
}

export default Card;