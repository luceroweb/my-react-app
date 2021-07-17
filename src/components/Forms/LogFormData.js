import { Form } from './EmailForm';
import { EmailService } from '../../services/email.service';

const LogFormData = () => {
  const emailService = new EmailService();

  const logFormData = (data) => {
    emailService.subscribeUserToEmailList(data);
  }

  return(
    <div>
      <Form logFormData={logFormData} />
    </div>
  );
}

export default LogFormData;