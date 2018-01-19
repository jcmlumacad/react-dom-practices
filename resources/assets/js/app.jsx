import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

/*
function formatName(user) {
    if (user) {
        return user.firstName + ' ' + user.lastName;
    }

    return 'Stranger';
}

const user = {
    firstName: 'John',
    lastName: 'Doe'
};
// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );

const element = React.createElement(
    'h1',
    { className: 'greetings' },
    'Hello, world!'
);

ReactDOM.render(
    // <h1>Hello, world!</h1>,
    element,
    document.getElementById('root')
);
*/

/**
 * @return React.Component element
 */
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// // or
class Welcome extends React.Component {
  render () {
    return <h1>Hello, {this.props.name}</h1>
  }
}

Welcome.propTypes = {
  name: PropTypes.string
}

// const element = <Welcome name="Test" />;
//
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

class App extends React.Component {
  render () {
    return (
      <div>
        <Welcome name='A' />
        <Welcome name='B' />
        <Welcome name='C' />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
