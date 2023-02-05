import { aes_gcm_encrypt, aes_gcm_decrypt } from '../index.js';

const password = '123456';
const message = 'i will never let you go';
const encrypted = await aes_gcm_encrypt(message, password);
const decrypted = await aes_gcm_decrypt(encrypted, password);

if (message !== decrypted) {
	throw Error('mismatch');
}

console.log('success');
