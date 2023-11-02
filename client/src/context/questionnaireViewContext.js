import React, { createContext, useState } from 'react'
export const QViewContext = createContext()

const QViewContextProvider = (props) => {
    const [qView, setQView] = useState({page:0,visible:true});
  
    function nextView() {
        const qViewPages = 5;
        if (qView.page + 1 <= qViewPages) {
            qView.page = qView.page + 1;
        }
        const newQView = {...qView};
        setQView(newQView);
    }
  
    function prevView() {
        if (qView.page - 1 >= 0) {
            qView.page = qView.page - 1;
        }
        const newQView = {...qView};
        setQView(newQView);
    }
  
    function showQ() {
        qView.visible = true;
        const newQView = {...qView};
        setQView(newQView);
    }
  
    function hideQ() {
        qView.visible = false;
        const newQView = {...qView};
        setQView(newQView);
    }

    return (
         <QViewContext.Provider 
            value={{
                qView,
                nextView,
                prevView,
                showQ,
                hideQ
             }}>
               {props.children}
         </QViewContext.Provider>
    )
}
export default QViewContextProvider