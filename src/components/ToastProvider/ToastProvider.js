import React from 'react';
import useEscape from '../../hooks/UseEscape';
export const ToastContext = React.createContext();

let toastCount = 0;

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  
  function addToast(newToast) {
    setToasts([...toasts, {...newToast, id:++toastCount}]);
  }

  function deleteToastById(id) {
    setToasts(toasts.filter(t=>t.id !== id));
  }

  useEscape(()=>setToasts([]));

  return <ToastContext value={{toasts, addToast, deleteToastById}}>
    {children}
  </ToastContext>;
}

export default ToastProvider;
