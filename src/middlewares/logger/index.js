module.exports = strapi => {
    return {
      initialize() {
        strapi.app.use(async (ctx, next) => {
          // Call next to continue to the next middleware or route handler
          await next();

          // After the route handler we can now access the response ctx.response
          // The current route is accessible with ctx.request.route
          if (ctx.request && ctx.request.route) {
            const { authenticatedUser } = ctx.state.user;
            const logData = {
              route: ctx.request.route.path,
              user: authenticatedUser ? authenticatedUser.username : 'anonymous',
            };

            const fs = require('fs');
            fs.writeFile('./logs/log.json', JSON.stringify(logData, null, 2), (err) => {
              if (err) throw err;
            });
          }
        });
      },
    };
  };
