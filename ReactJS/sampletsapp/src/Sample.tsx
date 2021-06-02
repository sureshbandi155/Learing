import React from 'react';

interface Props{
    name: string
}

const Sample:React.FunctionComponent<Props> = (props)=>{
    return <h1>Hey hello {props.name}</h1>
};

export default Sample;