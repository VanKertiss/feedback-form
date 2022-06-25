import HS from './App.module.css';
import Date from './components/date/Date';
import Email from './components/email/Email';
import Message from './components/message/Message';
import Name from './components/name/Name';
import Phone from './components/phone/Phone';

function App() {
  return (
    <div className={HS.container}>
      <form className={HS.formContainer} action="" method="post">
        <Name />
        <Date />
        <Email />
        <Phone />
        <Message />
      </form>
    </div>
  );
}

export default App;
