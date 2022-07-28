const notifyByEmail = (EMAIL) => {
  console.log(`Email sent to :${EMAIL}`);
}


const notifyByText = (PHONE_NUMBER) => {
  console.log(`Text sent to :${PHONE_NUMBER}`);
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}