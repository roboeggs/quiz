import React from 'react';
import styles from './App.module.scss';
import Modal from './components/Modal';
import Card from './components/Card';
import code from './codes.json';
import quiz_html from './questions/html.json';
import quiz_css from './questions/css.json';
import quiz_js from './questions/js.json';
import quiz_react from './questions/react.json';


let quiz_data = 0;
const onClickVariant = (index) => {
  switch(index){
    case 0: {
      quiz_data = quiz_html;
      break;
    }
    case 1: {
      quiz_data = quiz_css;
      break;
    }
    case 2: {
      quiz_data = quiz_js;
      break;
    }
    case 3: {
      quiz_data = quiz_react;
      break;
    }
    default:
  }
  return false;
}


function App() {
    const [open, setOpen] = React.useState(true);
    return (
      <div>  
          {open ? 
            <div className={styles.setting}>    
              <header className={styles.header}>
                  <h2 className={styles.header__text}>CHECK YOURSELF</h2>
              </header>
              <main className={styles.content}>
              {code.map((element, index) => (<Card 
                  packet={element}
                  onClickOpen={() => setOpen(onClickVariant(index))}
              />)
              )}
              </main>
            </div> 
          : <Modal 
            onClickClose={() => setOpen(true)}
            data={quiz_data}
          />}
      </div>
    );
}

export default App;