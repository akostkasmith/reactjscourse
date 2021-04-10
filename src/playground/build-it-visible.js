
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })

    }
    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visible && (
                <div><p>You can see the deets.</p></div>
            )}
        </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));


// const appRoot = document.getElementById('app');

// const app = {
//     visibility: false,
//     text: 'Here is some text to show'
// }

// const onClick = () => {
//     app.visibility = !app.visibility;
//     render();
// }

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClick}>{app.visibility ? 'Hide Details' : 'Show Details'}</button>
//             {app.visibility && (
//                 <div><p>Yuo can see the deets.</p></div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }    

// render();
