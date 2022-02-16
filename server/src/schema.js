const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        tracksForHome: [Track!]!
    }

    "a track is a group of modules that teaches about a specific topic"
    type Track{
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author{
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs;