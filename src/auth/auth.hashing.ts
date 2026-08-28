import argon2 from 'argon2';

export async function hashByArgon2(password: string) {
  // Algorithm config
  const options = {
    memoryCost: 65536, // 64 mib
    timeCost: 2, // 2 passes
    parallelism: 2, // 2 threads
    hashLength: 32, // 32 bytes output
    saltLength: 16, //16 bytes salt
  };

  return argon2.hash(password, options);
}

export async function verifyByArgon(hash: string, original: string) {
  return argon2.verify(hash, original);
}
