module.exports = {
    create: function(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === 'moment') {
            context.report({
              node,
              message: 'The use of Moment.js is forbidden. Consider using date-fns or Luxon instead.',
            });
          }
        },
      };
    },
  };
  