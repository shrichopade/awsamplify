import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, welcome to the ReactApp deployed on AWS Amplify.</h1>
		<h2>Auth is now added to the application!!!</h2>
      </header>
	   <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);