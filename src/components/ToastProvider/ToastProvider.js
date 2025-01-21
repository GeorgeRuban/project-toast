import React from 'react';

export const ToastContext = React.createContext();

let toastCount = 0;

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  
  function addToast(newToast) {
    setToasts([...toasts, {...newToast, id:++toastCount}]);
  }

  function deleteToastById(id) {
    console.log("deleteToastById", id);
    console.log("toasts", toasts);
    setToasts(toasts.filter(t=>t.id !== id));
  }

  return <ToastContext value={{toasts, addToast, deleteToastById}}>
    {children}
  </ToastContext>;
}

export default ToastProvider;
