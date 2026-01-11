/**
 * Encrypts plaintext using AES-GCM with supplied password, for decryption with aes_gcm_decrypt()
 *
 * @param   {string} plaintext plain text to be encrypted
 * @param   {string} password password to use to encrypt plaintext
 * @returns {Promise<string>} encrypted cipher text
 */
export function aes_gcm_encrypt(plaintext: string, password: string): Promise<string>;
/**
 * Decrypts ciphertext encrypted with aes_gcm_encrypt() using supplied password
 *
 * @param   {string} ciphertext ciphertext to be decrypted
 * @param   {string} password password to use to decrypt ciphertext
 * @returns {Promise<string>} decrypted plaintext
 */
export function aes_gcm_decrypt(ciphertext: string, password: string): Promise<string>;
