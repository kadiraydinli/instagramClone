const emailRegex = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;

export const emailValidate = (email: string): boolean => {
    return emailRegex.test(email);
};