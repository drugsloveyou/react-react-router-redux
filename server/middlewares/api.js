module.exports = app => {
  app.get('/json/test', (req, res) => {
    const data = { errCode: 0, errMsg: 'success' };
    res.send(JSON.stringify(data));
  });
};
