import { Web3ReactProvider } from '@web3-react/core'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Web3Provider from 'web3-react'
import './index.css'
import { App } from './modules/app/'
import reportWebVitals from './reportWebVitals'
import web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function getLibrary(provider:any) {
  const library = new web3(provider);
  return library;
}
ReactDOM.render(
    <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Web3ReactProvider>
    , document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
