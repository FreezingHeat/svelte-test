module.exports = (req, res) => {
  // const date = new Date().toString();
  res.status(200).json({
      ips: req.ips,
      ip: req.ip,
      localAddress: req.socket.localAddress
  })
};
