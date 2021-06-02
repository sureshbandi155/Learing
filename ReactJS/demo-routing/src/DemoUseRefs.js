import { useRef } from 'react';

const DemoUseRefs = props => {
    const inputRef = useRef(null);
    const formSumbitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={formSumbitHandler.bind(this)}>
                <input type="text" ref={inputRef} />
                <input type="text" />
                <button onClick={() => inputRef.current.focus()}>Focus</button>
            </form>
        </>
    );
}

export default DemoUseRefs;