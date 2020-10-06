![](https://img.shields.io/badge/made%20with-React-blue?logo=react).
![](https://img.shields.io/badge/made%20with-node.js-success?logo=node.js).


<img src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Frevolalex%2FReact-Nasa-Picture-Of-The-Day" alt="Hits">.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Screenshot
<img src= "https://user-images.githubusercontent.com/56839789/95198177-16ff6280-07db-11eb-9176-93dd301a3ccb.gif">

# Intro to react

## Component

```js
class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}
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








## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Status
Project is:  _finished_
Readme:  _To be continued_


## Contact	
- [![LinkedIn][linkedin-shield]][linkedin-url] 	
- revolalex@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexandre-rodrigueza/


