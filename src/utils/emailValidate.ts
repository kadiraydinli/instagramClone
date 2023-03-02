const emailRegex = /^[\w-\.]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export const emailValidate = (email: string): boolean => {
    return emailRegex.test(email);
};