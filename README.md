# React Native CryptoJS
> 📢 : Not Actively Maintained, if it works it works

React Native JavaScript Library of crypto-js.

## Install

```bash
yarn add rn-crypto-js
```

## List of Algorithms

| Hashing   	            | HMAC           	                | CIPHERS   	            | PBKDF2 	            |
|-------------------------- |---------------------------------- |-------------------------- |---------------------- |
| [MD5](#MD5)  	            | [HMAC-MD5](#HMAC-MD5)             | [AES](#AES)  	            | [PBKDF2](#PBKDF2) 	|
| [SHA1](#SHA1)             | [HMAC-SHA1](#HMAC-SHA1)           | [DES](#DES)  	            |        	            |
| [SHA256](#SHA256)         | [HMAC-SHA256](#HMAC-SHA256)       | [TripleDES](#TripleDES) 	|        	            |
| [SHA224](#SHA224)         | [HMAC-SHA224](#HMAC-SHA224)       | [RC4](#RC4)              	|        	            |
| [SHA512](#SHA512)         | [HMAC-SHA512](#HMAC-SHA512)       | [RC4Drop](#RC4Drop)   	  |        	            |
| [SHA384](#SHA384)         | [HMAC-SHA384](#HMAC-SHA384)       | [RABBIT](#RABBIT)     	  |        	            |
| [SHA3](#SHA3)             | [HMAC-SHA3](#HMAC-SHA3)           |           	              |        	            |
| [RIPEMD160](#RIPEMD160) 	| [HMAC-RIPEMD160](#HMAC-RIPEMD160) |           	              |        	            |


#### Plain text encryption

```javascript
import CryptoJS from "rn-crypto-js";

// Encrypt
const ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
const decryptedData  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123').toString(CryptoJS.enc.Utf8);
console.log(decryptedData); // 'my message'
```

#### Object encryption

```javascript
import CryptoJS from "rn-crypto-js";
const data = [{id: 1}, {id: 2}]

// Encrypt
const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

// Decrypt
const decryptedString  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123').toString(CryptoJS.enc.Utf8);
const decryptedData = JSON.parse(decryptedString);
console.log(decryptedData); // [{id: 1}, {id: 2}]
```

## Hashing
### MD5
MD5 is a widely used hash function. It's been used in a variety of security applications and is also commonly used to check the integrity of files. Though, MD5 is not collision resistant, and it isn't suitable for applications like SSL certificates or digital signatures that rely on this property.

```javascript
const hash = CryptoJS.MD5("Message").toString();
```

### SHA1
The SHA hash functions were designed by the National Security Agency (NSA). SHA-1 is the most established of the existing SHA hash functions, and it's used in a variety of security applications and protocols. Though, SHA-1's collision resistance has been weakening as new attacks are discovered or improved.

```javascript
const hash = CryptoJS.SHA1("Message").toString();
```

### SHA256
SHA-256 is one of the four variants in the SHA-2 set. It isn't as widely used as SHA-1, though it appears to provide much better security.

```javascript
const hash = CryptoJS.SHA256("Message").toString();
```
### SHA224
```javascript
const hash = CryptoJS.SHA224("Message").toString();
```

### SHA384
```javascript
const hash = CryptoJS.SHA384("Message").toString();
```

### SHA512
```javascript
const hash = CryptoJS.SHA512("Message").toString();
```

### SHA3
SHA-3 is the winner of a five-year competition to select a new cryptographic hash algorithm where 64 competing designs were evaluated.
```javascript
const hash = CryptoJS.SHA3("Message").toString();
```

### RIPEMD160
```javascript
const hash = CryptoJS.RIPEMD160("Message").toString();
```

## HMAC
### HMAC-MD5
```javascript
const hash = CryptoJS.MD5("Message").toString();
```

### HMAC-SHA1
```javascript
const hash = CryptoJS.SHA1("Message").toString();
```

### HMAC-SHA256
```javascript
const hash = CryptoJS.SHA256("Message").toString();
```
### HMAC-SHA224
```javascript
const hash = CryptoJS.SHA224("Message").toString();
```

### HMAC-SHA384
```javascript
const hash = CryptoJS.SHA384("Message").toString();
```

### HMAC-SHA512
```javascript
const hash = CryptoJS.SHA512("Message").toString();
```

### HMAC-SHA3
```javascript
const hash = CryptoJS.SHA3("Message").toString();
```

### HMAC-RIPEMD160
```javascript
const hash = CryptoJS.HMACRIPEMD160("Message").toString();
```

## Ciphers

### AES
The Advanced Encryption Standard (AES) is a U.S. Federal Information Processing Standard (FIPS). It was selected after a 5-year process where 15 competing designs were evaluated.

```javascript
const encrypted = CryptoJS.AES.encrypt("Message", "5ecret").toString();
​
const decrypted = CryptoJS.AES.decrypt(encrypted, "5ecret").toString(CryptoJS.enc.Utf8);
```

### DES
DES is a previously dominant algorithm for encryption, and was published as an official Federal Information Processing Standard (FIPS). DES is now considered to be insecure due to the small key size.

```javascript
const encrypted = CryptoJS.DES.encrypt("Message", "5ecret").toString();
​
const decrypted = CryptoJS.DES.decrypt(encrypted, "5ecret").toString(CryptoJS.enc.Utf8);
```

### TripleDES
Triple DES applies DES three times to each block to increase the key size. The algorithm is believed to be secure in this form.

```javascript
const encrypted = CryptoJS.TripleDES.encrypt("Message", "5ecret").toString();
​
const decrypted = CryptoJS.TripleDES.decrypt(encrypted, "5ecret").toString(CryptoJS.enc.Utf8);
```

### RC4
RC4 is a widely-used stream cipher. It's used in popular protocols such as SSL and WEP. Although remarkable for its simplicity and speed, the algorithm's history doesn't inspire confidence in its security.

```javascript
const encrypted = CryptoJS.RC4.encrypt("Message", "5ecret").toString();
​
const decrypted = CryptoJS.RC4.decrypt(encrypted, "5ecret").toString(CryptoJS.enc.Utf8);
```

### RC4Drop
It was discovered that the first few bytes of keystream are strongly non-random and leak information about the key. We can defend against this attack by discarding the initial portion of the keystream. This modified algorithm is traditionally called RC4-Drop.

```javascript
const encrypted = CryptoJS.RC4Drop.encrypt("Message", "5ecret").toString();
​
const decrypted = CryptoJS.RC4Drop.decrypt(encrypted, "5ecret").toString(CryptoJS.enc.Utf8);
```

### Rabbit
Rabbit is a high-performance stream cipher and a finalist in the eSTREAM Portfolio. It is one of the four designs selected after a 3 1/2-year process where 22 designs were evaluated.

```javascript
const encrypted = CryptoJS.Rabbit.encrypt("Message", "5ecret").toString();
​
const decrypted = CryptoJS.Rabbit.decrypt(encrypted, "5ecret").toString(CryptoJS.enc.Utf8);
```

## PBKDF2
PBKDF2 is a password-based key derivation function. In many applications of cryptography, user security is ultimately dependent on a password, and because a password usually can't be used directly as a cryptographic key, some processing is required.

```javascript
const salt = CryptoJS.lib.WordArray.random(128 / 8);
const key128Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, {
  keySize: 128 / 32
}).toString();

const key256Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, {
  keySize: 256 / 32
}).toString();

const key512Bits = CryptoJS.PBKDF2("Secret Passphrase", salt, {
  keySize: 512 / 32
}).toString();

const key512Bits1000Iterations = CryptoJS.PBKDF2("Secret Passphrase", salt, {
  keySize: 512 / 32,
  iterations: 1000
}).toString();
```


## Contributing
Check the issues and pull requests to see if the idea or bug you want to share about is already present. If you don't see it, do one of the following:

* If it is a small change, just fork the project and create a pull request.
* If it is major, start by opening an issue.


## License
Please see [LICENSE](LICENSE) for more info.
