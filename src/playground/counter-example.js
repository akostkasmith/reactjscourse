class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this); // Binds the function back to this. 
        this.handleMinusOne = this.handleMinusOne.bind(this); // Binds the function back to this. 
        this.handleReset = this.handleReset.bind(this); // Binds the function back to this. 

        this.state = {
            count: props.count,
            name: 'Julie'
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: (prevState.count == 0) ? 0 : prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.name}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// Create three methods
// use console.log to print the method name


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count --;
//     renderCounterApp();
// }
// const setupReset = () => {
//     count = 0; 
//     renderCounterApp();
// }

// const appRoot2 = document.getElementById('app');

// class Counter {
//     render() {
        
//     }
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={setupReset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot2);    
// };

// renderCounterApp();