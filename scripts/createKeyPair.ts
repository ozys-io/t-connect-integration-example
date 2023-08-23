import { keyPairFromSeed, KeyPair, getSecureRandomBytes } from "ton-crypto";

async function createKeyPair() {
  const seed: Buffer = await getSecureRandomBytes(32);
  const keypair: KeyPair = keyPairFromSeed(seed);

  console.log("publicKey: ", keypair.publicKey.toString("hex"));
  console.log("privateKey: ", keypair.secretKey.toString("hex"));
}

createKeyPair();
