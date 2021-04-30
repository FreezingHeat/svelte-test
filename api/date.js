module.exports = (req, res) => {
  // const date = new Date().toString();
  res.status(200).json({
      headers: req.headers
      localAddress: req.localAddress
  });
};
