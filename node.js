import { webcrypto } from 'node:crypto';
import { encrypt, decrypt } from './index.js';

/**
 * Encrypts plaintext using AES-GCM with supplied password, for decryption with aesGcmDecrypt()
 *
 * @param   {string} plaintext - Plaintext to be encrypted
 * @param   {string} password - Password to use to encrypt plaintext
 * @returns {Promise<string>} Encrypted ciphertext
 */
export function aesGcmEncrypt(plaintext, password) {
  return encrypt(webcrypto, plaintext, password);
}

/**
 * Decrypts ciphertext encrypted with aesGcmEncrypt() using supplied password
 *
 * @param   {string} plaintext - Plaintext to be encrypted
 * @param   {string} password - Password to use to encrypt plaintext
 * @returns {Promise<string>} Encrypted ciphertext
 */
export function aesGcmDecrypt(plaintext, password) {
  return decrypt(webcrypto, plaintext, password);
}
