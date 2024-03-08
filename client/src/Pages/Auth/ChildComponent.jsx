import React from 'react';

function ChildComponent(props) {
    const name = props.name;
  return <div>Hello, {props.name}
  { console.log( { name  })}</div>;
}

export default ChildComponent;