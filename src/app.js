
class IndecisionApp extends React.Component {
    constructor(props){ 
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        if (localStorage.getItem('options')) {
            
            this.setState(() => ({
                options: JSON.parse(localStorage.getItem('options'))
            }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(prevState.options);
            localStorage.setItem('options', json);
        }
        console.log('saving data');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }
    handleDeleteOptions() {
        this.setState(() => ({'options' : []}));
    };
    handlePick() {
        
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        } 
        this.setState((prevState) => ({options: [option, ...prevState.options]}));
            
    }
    render() {
        
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <p>Options Component Here</p>
            {
                props.options.map((option) => (
                    <Option 
                        handleDeleteOption={props.handleDeleteOption}
                        key={option} 
                        optionText={option} 
                    />)
                )
            }
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
        
    );
}


class AddOption extends React.Component {
    constructor(props){ 
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault(); 

        const option = e.target.elements.option.value.trim();        
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
    } 
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//ReactDOM.render(<User name="Aaron" age="39"/>, document.getElementById('app'));