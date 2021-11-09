import React from 'react'
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    render(){
        return <div>
            <h1>Component Header</h1>
            <p>Component Body</p>
        </div>;
    }
}

class MyParent extends React.Component {
    render(){
        return <div style={
            {
                borderColor: "black", 
                borderRadius: 5, 
                borderStyle: "solid", 
                margin: 5
            }
        }>
            <MyComponent/>
        </div>
    }
}

export default MyParent;