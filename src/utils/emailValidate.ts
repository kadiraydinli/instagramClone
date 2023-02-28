const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const emailValidate = (email: string): boolean => {
    return emailRegex.test(email);
};