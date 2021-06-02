import React from 'react';

interface Props {};
interface State {
    count: number;
};

class Counter extends React.Component<Props, State>{
    
state: State={
    count: 0
};
increment = () => {
    this.setState({
        count: (this.state.count + 1)
    });
}
    render(){
        return(
            <div>
                <h1>hello All..</h1>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }

}
export default Counter;