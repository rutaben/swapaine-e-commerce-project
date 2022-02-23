const jwt = require('jsonwebtoken');

//i token generavimo funkcija priimam email ir role, nes nuo ju priklausys tokenas
const generateToken = ({ email, role }) => {
  if (email && role) {
    const token = jwt.sign({ email, role }, process.env.TOKEN_SECRET);
    return token;
  }
  //jei nera email ir role  graziname null
  return null;
}

module.exports = generateToken;