import { sign, signVerify, sha256_sync } from "ton-crypto";

const secretKey = Buffer.from("Your secretKey", "hex");
const publicKey = Buffer.from("Your publicKey", "hex");

// please contact support@megaton.fi to get your appId
const appId = "Your appId";
const nonce = 0;

const data = sha256_sync(Buffer.from(`?appId=${appId}&nonce=${nonce}`));
const signature = sign(data, secretKey);

console.log(signature.toString("hex"));
console.log(signVerify(data, signature, publicKey));
