import shajs from 'sha.js';
import base32Encode from 'base32-encode';

/** Convert String to Uint8Array */
function str2Uint8Array(input: string): Uint8Array {
  const encoder = new TextEncoder();
  const view = encoder.encode(input);
  return view;
}

// password encrypt method: readme.md
export function encrypt(password: string): string {
  const pwdBytes = str2Uint8Array(password);
  const offset = (pwdBytes.length % 3) + 1;

  const salt = [];
  for (let i = 0; i < password.length; i += offset + 1) {
    salt.push(password[i]);
  }
  const saltBytes = str2Uint8Array(salt.join(''));

  const digest = shajs('sha1')
    .update(saltBytes)
    .update(pwdBytes)
    .digest();

  // const base32Encode = require('base32-encode');
  return base32Encode(digest, 'RFC4648', { padding: false });
}

