import React from 'react';

export function useEscape(action) {
    React.useEffect(()=>{
        function handleKeyDown(event) {
            if (event.code === 'Escape') {
                action();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown)
        };
    }, [action]);
}

export default useEscape;
