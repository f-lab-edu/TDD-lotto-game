import './style.css';
import Input from './src/Input';

document.querySelector('#app').innerHTML = `
  <div class="mainContainer">
    <h1>🎱 행운의 로또</h1>
    ${Input()}
  </div>
`;
