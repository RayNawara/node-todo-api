const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

let password = '123abc!';

// bcrypt.hash(password, saltRounds, function(err, hash) {
//   // Store hash in your password DB.
//   console.log(hash);
// });

let hashedPassword = '$2a$10$rx0koH5aSnP5TJxtfG02nuH1kW/fNdZigNFPriclpxSQ0190Lckaa';

bcrypt.compare(password, hashedPassword, function(err, res) {
    console.log(res);
});

// let data = {
//   id: 10
// }
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// let message = 'I am user number 3';
//
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//   id: 4
// };
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
