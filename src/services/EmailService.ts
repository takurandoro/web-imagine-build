import emailjs from 'emailjs-com';

interface EmailParams {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
  service: string;
}

// To use EmailJS, you would need to:
// 1. Create an account at emailjs.com
// 2. Set up a service (like Gmail, Outlook, etc.)
// 3. Create a template
// 4. Get your user ID and service ID

export const sendEmail = async (params: EmailParams) => {
  const templateParams = {
    from_name: params.name,
    reply_to: params.email,
    message: params.message,
    phone_number: params.phoneNumber,
    service_type: params.service,
    to_email: 'freniesstudio@gmail.com'
  };

  try {
    // TODO: Replace the following with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_USER_ID";

    // Uncomment the line below after filling in your credentials
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
