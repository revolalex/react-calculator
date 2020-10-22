![](https://img.shields.io/badge/made%20with-React-blue?logo=react).
![](https://img.shields.io/badge/made%20with-node.js-success?logo=node.js).


<img src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Frevolalex%2FReact-Nasa-Picture-Of-The-Day" alt="Hits">.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Screenshot
<img src= "https://user-images.githubusercontent.com/56839789/95198177-16ff6280-07db-11eb-9176-93dd301a3ccb.gif">

# Intro to react

## Component

- react component
```js
import React, { Component } from 'react';
```

- add CSS

```js
import '.Welcome.css'
```

- the components

```js
class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}
```

- Export

```js
export default Welcome
```

- Import

```js
import Welcome from './Welcome'
```

- Use

```html
<Welcome />
```


## JSX

- With

```js
<form method="post" action="/sessions" onSubmit={this.handleSubmit}>
  <p className="field">
    <label>
      E-mail
      <input
        type="email"
        name="email"
        required
        autoFocus
        value={this.state.email}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p className="field">
    <label>
      Mot de passe
      <input
        type="password"
        name="password"
        required
        value={this.state.password}
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p>
    <button type="submit" value="Connexion" />
  </p>
</form>
```

- without

```js
React.createElement(
  'form',
  { method: 'post', action: '/sessions', onSubmit: this.handleSubmit },
  React.createElement(
    'p',
    { className: 'field' },
    React.createElement(
      'label',
      null,
      'E-mail',
      React.createElement('input', {
        type: 'email',
        name: 'email',
        required: true,
        autoFocus: true,
        value: this.state.email,
        onChange: this.handleFieldChange,
      })
    )
  ),
  React.createElement(
    'p',
    { className: 'field' },
    React.createElement(
      'label',
      null,
      'Mot de passe',
      React.createElement('input', {
        type: 'password',
        name: 'password',
        required: true,
        value: this.state.password,
        onChange: this.handleFieldChange,
      })
    )
  ),
  React.createElement(
    'p',
    null,
    React.createElement('button', { type: 'submit', value: 'Connexion' })
  )
)
```

## JSX attribut

- for character ""

```js
const element = <div tabIndex="0"></div>;
```

- for javascript {}

```js
const element = <img src={user.avatarUrl}></img>;
```


## Render element

- html file

```html
<div id="root"></div>
```

- To render a React element in a root DOM node, pass both to the ReactDOM.render () method:

```js
const element = <h1>Bonjour, monde</h1>;
ReactDOM.render(element, document.getElementById('root'));
```









## Status
Project is:  _finished_
<br>
Readme:  _To be continued_


## Contact	
- [![LinkedIn][linkedin-shield]][linkedin-url] 	
- revolalex@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexandre-rodrigueza/


