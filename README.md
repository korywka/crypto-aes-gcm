# crypto-aes-gcm

Uses the SubtleCrypto interface of the Web Cryptography API to encrypt and decrypt text using AES-GCM (AES Galois counter mode).

This module uses the native WebCrypto API in [node.js](https://nodejs.org/api/webcrypto.html), Deno and the [browser](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).

Node and browser: [crypto-aes-gcm](https://www.npmjs.com/package/crypto-aes-gcm)

Deno package: [https://deno.land/x/crypto_aes_gcm](https://deno.land/x/crypto_aes_gcm)

```js
import { aes_gcm_encrypt, aes_gcm_decrypt } from '../index.js';
const password = '123456';
const message = 'i will never let you go';

const encrypted = await aes_gcm_encrypt(message, password);
console.log(encrypted);

const decrypted = await aes_gcm_decrypt(encrypted, password);
console.log(decrypted);

console.log(message === decrypted);
```

## Original implementation

The code was originally written by [Chris Veness](https://gist.github.com/chrisveness/43bcda93af9f646d083fad678071b90a).

