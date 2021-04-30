module.exports = (req, res) => {
  console.log(req);
  // const date = new Date().toString();
  req.status(200).json({
      ips: req.ips,
      ip: req.ip,
      localAddress: req.localAddress
  });
};
