import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from '../ToastProvider';

// Technically any item can be passed in the array.
function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      {toasts?.map((t)=>{
        return (
        <li className={styles.toastWrapper} key={t.id} >
          <Toast variant={t.variant} id={t.id}>
            {t.message}
          </Toast>
        </li>);
      })}
    </ol>
  );
}

export default ToastShelf;
