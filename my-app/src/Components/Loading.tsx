import React from 'react'

const Loading: React.FC<{ class: string, element: number }> = (props) => {
    function createElement() {
        const elements = []
        for(let i = 0; i < props.element; i++){
          elements.push(<div className={props.class} />);
        } 
        return elements;
    }
    return (
        <> 
            { createElement() }
        </>
    )
}

export default Loading