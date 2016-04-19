import React from 'react';
import { render } from 'react-dom';
import passProps from '../index';

const SomeComponent = (props) => {
  return (<div { ...passProps(props, 'name', 'job') }>SomeComponent</div>);
};

render(
  <SomeComponent
    name="Jon Doe"
    job="Idiot"
    age={ 1337 }
  />,
  document.getElementById('root')
);
