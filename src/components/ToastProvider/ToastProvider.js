import React from 'react';

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

  React.useEffect(()=>{
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        setToasts([]);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return ()=>window.removeEventListener('keydown', handleKeyDown);
  }, [])

  return <ToastContext value={{toasts, addToast, deleteToastById}}>
    {children}
  </ToastContext>;
}

export default ToastProvider;
