const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
        rules: [Rule]
        rulesByInterval(start: String!, end: String!): [Rule]
    }

    type Mutation {
        deleteRule(id: Int): [Rule]
        createRule(
            id: ID,
            daily: Boolean,
            weekly: Boolean,
            day: String
        ): Rule
    }

    type Rule {
        id: ID
        daily: Boolean
        weekly: Boolean
        day: String
        daysWeek: [Day]
        intervals: [Interval!]
    }

    type Day {
        day: String
    }

    type Interval {
        start: String!
        end: String!
    }
`;

module.exports = typeDefs;