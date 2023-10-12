const { verifyToken, isAdmin, isModerator, isModeratorOrAdmin } = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", (req, res, next) => {
    verifyToken(req, res, () => {
      controller.userBoard(req, res);
    });
  });

  app.get("/api/test/mod", (req, res, next) => {
    verifyToken(req, res, () => {
      isModerator(req, res, () => {
        controller.moderatorBoard(req, res);
      });
    });
  });

  app.get("/api/test/admin", (req, res, next) => {
    verifyToken(req, res, () => {
      isAdmin(req, res, () => {
        controller.adminBoard(req, res);
      });
    });
  });
};