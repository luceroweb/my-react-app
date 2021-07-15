import { Form } from './Form';
import { EmailService } from '../services/email.service';

export const Parent = () => {
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