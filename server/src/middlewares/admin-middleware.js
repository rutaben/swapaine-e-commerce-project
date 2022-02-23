const adminMiddleware = (req, res, next) => {
  //middleware'as skirtas pasakyti, kad sitas access skirtas tik adminui, jei adminas, vykdysis sekanti funkcija
  if (req.user.role !== 'ADMIN') {
    res.status(403).json({
      message: 'You must be Admin to acceess request'
    });
    return;
  }

  next();
};

module.exports = adminMiddleware;
