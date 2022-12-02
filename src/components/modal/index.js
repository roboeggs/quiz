import React from 'react';
import styles from './Modal.module.scss';
import Quiz from '../Quiz';
import Result from '../Result'
// import data from './data.json'

let cor = [];

function Modal(props) {
    console.log(props.data);
    const [step, setStep] = React.useState(0);
    // const [correct, setCorrect] = React.useState(0);
    const question = props.data[step];

    const onClickVariant = (index) => {
        // console.log(step, index);
        setStep(step + 1);
        if(index === question.correct){
          cor[step] = 1;
        }
        else{
          cor[step] = 0;
        }
    }


    const percentage = Math.round(step / props.data.length * 100);
  return (
    <div className={styles.frame}>
        <button className={styles.frame__close + ' cursor animation'}
            onClick={props.onClickClose}
        ></button> 
        {step !== props.data.length ? <Quiz
                percentage={percentage}
                step={step}
                question={question}
                onClickVariant={onClickVariant}
                onClicBack={() => setStep(step - 1)}
            /> : <Result 
                correct={cor.reduce(function(sum, elem) {
                          return sum + elem;}, 0)}
                count={props.data.length}
                replay={() => setStep(0)}
            />}
    </div>
  );
}

export default Modal;