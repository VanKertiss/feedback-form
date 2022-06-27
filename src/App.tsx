import HS from './App.module.css';
import Date from './components/date/Date';
import Email from './components/email/Email';
import Message from './components/message/Message';
import Name from './components/name/Name';
import Phone from './components/phone/Phone';

function App() {
  return (
    <div className={HS.container}>
      <h1>feedback form</h1>
      <form className={HS.formContainer} action="" method="post">
        <Name />
        <Date />
        <Email />
        <Phone />
        <Message />
        <input className={HS.submitButton} type="button" value="Отправить данные" />
      </form>
    </div>
  );
}

export default App;
