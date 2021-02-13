const rules = require('./rules');

const resolvers = {
  Query: {
    rules: () => rules,
    rulesByInterval: (_, args) => {
      return rules.filter((rule) => rule.intervals.find(obj => obj.start >= args.start && obj.end <= args.end));
    }
  },
  Mutation: {
    deleteRule: (_, args) => {
      rules.splice(args.id - 1, 1);
      return rules;
    },
    createRule: (_, args) => {
      const newRule = args;
      rules.push(newRule);
      return newRule;
    }
  }
};

module.exports = resolvers;