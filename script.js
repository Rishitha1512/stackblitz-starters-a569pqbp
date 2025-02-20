const jwt = require('jsonwebtoken');

const SECRET_KEY = 'rishi@123'; 

const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1hr' });
};

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};

const payload = { 
  userId: 'Rishitha', 
  role: 'Student' 
};

const token = encrypt(payload);
console.log('Generated Token:', token);


const decoded = decrypt(token);

if (decoded) {
  console.log('Decrypted Payload:', decoded);
  console.log('Success');
} else {
  console.log('Failed to decrypt token');
}

module.exports = {
  encrypt,
  decrypt
};
