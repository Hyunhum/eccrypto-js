export interface Encrypted {
  ciphertext: Buffer;
  ephemPublicKey: Buffer;
  iv: Buffer;
  mac: Buffer;
}

export interface PreEncryptOpts extends Encrypted {
  ephemPrivateKey: Buffer;
}

export interface KeyPair {
  privateKey: Buffer;
  publicKey: Buffer;
}

import * as eccryptoJS from '../index';

export type IEccrypto = typeof eccryptoJS;
