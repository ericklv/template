import Enc from 'enc';
import CryptoAES from 'crypto-js/aes';

export const encrypt = (value) => {
    return Enc.base64.encode(value);
};

export const decrypt = (value) => {
    return Enc.base64.decode(value);
};

export const encryptAES = (message, key) => {
    return CryptoAES.encrypt(message, key).toString()
};

export const decryptAES = (cryptomessage, key) => {
    return hex2string(CryptoAES.decrypt(cryptomessage, key).toString()).toString()
};

export const hex2string = (hexx) => {
    let hex = hexx.toString();
    let str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
};