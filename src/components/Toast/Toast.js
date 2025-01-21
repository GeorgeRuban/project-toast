import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, id, children}) {
  const Icon = ICONS_BY_VARIANT[variant] || Info;
  const style = styles[variant] || styles.notice;
  const {deleteToastById} = React.useContext(ToastContext); 
  return (
    <div className={`${styles.toast} ${style}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={()=>deleteToastById(id)}/>
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
