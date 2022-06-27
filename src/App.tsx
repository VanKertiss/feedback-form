import HS from './App.module.css';
import Date from './components/date/Date';
import Email from './components/email/Email';
import Message from './components/message/Message';
import Name from './components/name/Name';
import Phone from './components/phone/Phone';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className={HS.container}>
        <h1>feedback form</h1>
        <form className={HS.formContainer} action="" method="post">
          <Name />
          <Date />
          <Email />
          <Phone />
          <Message />
          <button className={HS.submitButton}>Отправить данные</button>
        </form>
      </div>
    </Provider>
  );
}

export default App;
