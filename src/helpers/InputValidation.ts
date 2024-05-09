export const isValidName = (name: string) => {
  return !!name.match("/[a-zA-Z]+/");
};

export const isValidEmail = (email: string) => {
  return !!email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
};

export const isValidPassword = (pass: string) => {
  console.log(pass.length);
  return pass.length >= 8;
};
