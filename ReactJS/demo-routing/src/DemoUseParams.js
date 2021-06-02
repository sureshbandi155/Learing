import { useParams } from 'react-router-dom';

const DemoUseParams = props => {
    let { id, name, address } = useParams();
    return (
        <>
            <p>Demo Use Params Screen</p>
            <p>id: {id}, Name: {name}, Address: {address}</p>
        </>
    );
}



export default DemoUseParams;