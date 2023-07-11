module.exports = () => {
  return async (ctx, next) => {
    // Call next to continue to the next middleware or route handler
    await next();

    // After the route handler we can now access the response ctx.response
    // The current route is accessible with ctx.request.route
    if (ctx.request && ctx.request.url) {
      const authenticatedUser  = ctx.state.user || {};
      const logData = {
        route: ctx.request.url,
        user: authenticatedUser ? authenticatedUser.username : 'anonymous',
      };

      const fs = require('fs');
      const path = require('path');

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('T')[0];
      const logFileName = `log-${formattedDate}.json`;

      fs.appendFile(path.join(__dirname, '../../.logs/', logFileName), JSON.stringify(logData, null, 2), (err) => {
        if (err) throw err;
      });
    }
  };
};
