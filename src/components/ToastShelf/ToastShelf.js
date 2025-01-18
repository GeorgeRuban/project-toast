import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

// Technically any item can be passed in the array.
function ToastShelf({toasts}) {
  return (
    <ol className={styles.wrapper}>
      {toasts?.map((t)=>{
        return (
        <li className={styles.toastWrapper} key={t.id} >
          <Toast variant={t.variant}>
            {t.message}
          </Toast>
        </li>);
      })}
    </ol>
  );
}

export default ToastShelf;
