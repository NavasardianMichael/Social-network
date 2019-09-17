export const required = value => {return value ? undefined : "Required"}; //by ternary and without return statement it doesn't work
const inputMinLength = minLength => value => value && value.length < minLength ? `Required at least ${minLength} characters` : null;
const inputMaxLength = maxLength => value => value && value.length > maxLength ? `No more than ${maxLength} characters` : null;

export const inputMinLength2 = inputMinLength(2);
export const inputMaxLength8 = inputMaxLength(8)  