module.exports = {
  isOwner: (req, res) => {
    return req.session.is_logined ? true : false;
  },
};
