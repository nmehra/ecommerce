import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

const roll = () => Math.floor( 6 * Math.random()) + 1;

var queryType = new GraphQLObjectType({
  name:'RootQuery',
  fields:{
    hello:{
      type:GraphQLString,
      resolve:()=>'world'
    },
    diceRoll : {
      type: new GraphQLList(GraphQLInt),
      args: {
        count : { type: GraphQLInt}
      },
      resolve: (_, args) => {
          let rolls = [];
          for (let i=0; i<args.count;i++)
            rolls.push(roll());
          return rolls;
      }
    },
  /*  items : {
      type : new GraphQLList()
    }*/
  }
});

var mySchema = new GraphQLSchema({
  query : queryType
});

module.exports = mySchema;
