import { assert, isValidPrivateKey } from './helpers/validators';
import { ecdhDerive } from './lib/secp256k1';

export async function derive(
  privateKeyA: Buffer,
  publicKeyB: Buffer
): Promise<Buffer> {
  assert(Buffer.isBuffer(privateKeyA), 'Bad private key');
  assert(Buffer.isBuffer(publicKeyB), 'Bad public key');
  assert(privateKeyA.length === 32, 'Bad private key');
  assert(isValidPrivateKey(privateKeyA), 'Bad private key');
  assert(
    publicKeyB.length === 65 || publicKeyB.length === 33,
    'Bad public key'
  );
  if (publicKeyB.length === 65) {
    assert(publicKeyB[0] === 4, 'Bad public key');
  }
  if (publicKeyB.length === 33) {
    assert(publicKeyB[0] === 2 || publicKeyB[0] === 3, 'Bad public key');
  }
  return ecdhDerive(publicKeyB, privateKeyA);
}
