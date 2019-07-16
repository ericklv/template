import Enc from 'enc';

export const encrypt = (value) => {
    return Enc.base64.encode(value);
};

export const decrypt = (value) => {
    return Enc.base64.decode(value);
};
