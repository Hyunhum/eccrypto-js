export const ENCRYPT_OP = 'encrypt';
export const DECRYPT_OP = 'decrypt';

export const SIGN_OP = 'sign';
export const VERIFY_OP = 'verify';

export const AES_LENGTH = 256;
export const HMAC_LENGTH = 256;

export const AES_BROWSER_ALGO = 'AES-CBC';
export const HMAC_BROWSER_ALGO = `SHA-${AES_LENGTH}`;
export const HMAC_BROWSER = 'HMAC';

export const AES_NODE_ALGO = `aes-${AES_LENGTH}-cbc`;
export const HMAC_NODE_ALGO = `sha${HMAC_LENGTH}`;

export const EMPTY_BUFFER = Buffer.from(new Uint8Array(0));
