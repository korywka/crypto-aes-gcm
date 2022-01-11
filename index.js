/**
 * @param   {Window.Crypto} crypto
 * @param   {string} plaintext
 * @param   {string} password
 * @returns {Promise<string>}
 */
export async function encrypt(crypto, plaintext, password) {
  // encode password as UTF-8
  const pwUtf8 = new TextEncoder().encode(password);
  // hash the password
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
  // get 96-bit random iv
  const iv = crypto.getRandomValues(new Uint8Array(12));
  // iv as utf-8 string
  const ivStr = Array.from(iv).map(b => String.fromCharCode(b)).join('');
  // specify algorithm to use
  const alg = { name: 'AES-GCM', iv: iv };
  // generate key from pw
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);
  // encode plaintext as UTF-8
  const ptUint8 = new TextEncoder().encode(plaintext);
  // encrypt plaintext using key
  const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8);
  // ciphertext as byte array
  const ctArray = Array.from(new Uint8Array(ctBuffer));
  // ciphertext as string
  const ctStr = ctArray.map(byte => String.fromCharCode(byte)).join('');
  // iv+ciphertext base64-encoded
  return btoa(ivStr + ctStr);
}

/**
 * @param   {Window.Crypto} crypto
 * @param   {string} ciphertext
 * @param   {string} password
 * @returns {Promise<string>}
 */
export async function decrypt(crypto, ciphertext, password) {
  // encode password as UTF-8
  const pwUtf8 = new TextEncoder().encode(password);
  // hash the password
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
  // decode base64 iv
  const ivStr = atob(ciphertext).slice(0, 12);
  // iv as Uint8Array
  const iv = new Uint8Array(Array.from(ivStr).map(ch => ch.charCodeAt(0)));
  // specify algorithm to use
  const alg = { name: 'AES-GCM', iv: iv };
  // generate key from pw
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);
  // decode base64 ciphertext
  const ctStr = atob(ciphertext).slice(12);
  // ciphertext as Uint8Array
  const ctUint8 = new Uint8Array(Array.from(ctStr).map(ch => ch.charCodeAt(0)));
  // note: why doesn't ctUint8 = new TextEncoder().encode(ctStr) work?

  try {
    // decrypt ciphertext using key
    const plainBuffer = await crypto.subtle.decrypt(alg, key, ctUint8);
    // return plaintext from ArrayBuffer
    return new TextDecoder().decode(plainBuffer);
  } catch (error) {
    throw new Error('decrypt failed');
  }
}
