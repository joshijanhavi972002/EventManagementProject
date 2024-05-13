import jwt from 'jsonwebtoken';

const generateToken = (data, secretKey) => {
  let token = "";
  if (data.roll == 'user')
    token = jwt.sign({ userData: data }, secretKey, { expiresIn: "1d" });
  else
    token = jwt.sign({ theaterOwnerData: data }, secretKey, { expiresIn: "1d" });

  return token;
};

const verifyToken = async (token, secretKey, response) => {
  try {
    const payload = await jwt.verify(token, secretKey);
  
    return payload;
  } catch (error) {
    console.log('Token verification failed:', error.message);
    response.status(203).json({ message: "Token verification failed" });
  }
}


export { verifyToken, generateToken };;