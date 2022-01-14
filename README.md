# crypto-aes-gcm

Uses the SubtleCrypto interface of the Web Cryptography API to encrypt and decrypt text using AES-GCM (AES Galois counter mode).

This module uses the native (web)crypto API in node.js and the browser.

```
npm install crypto-aes-gcm
```

```js
import { aesGcmEncrypt, aesGcmDecrypt } from 'crypto-aes-gcm';

// encryption
const ciphertext = await aesGcmEncrypt('my secret text', 'pw');
console.log(ciphertext);

// decryption
const plaintext = await aesGcmDecrypt(ciphertext, 'pw');
console.log(plaintext);
```

## Origin story

The code was originally written by [Chris Veness](https://github.com/chrisveness) at [this gist](https://gist.github.com/chrisveness/43bcda93af9f646d083fad678071b90a).

Then, it was published as a package with node.js compatability out of the box.

