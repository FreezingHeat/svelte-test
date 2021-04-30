module.exports = (req, res) => {
  // const date = new Date().toString();
  req.status(200).json({
      ips: req.getHeader("X-FORWARDED-FOR") || req.getHeader("x-forwarded-for"),
      ip: req.getHeader("x-real-ip") || req.getHeader("X-REAL-IP") ,
      localAddress: req.localAddress
  });
};
