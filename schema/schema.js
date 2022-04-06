const graphql = require('graphql')
const {GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLSchema,
    GraphQLInputObjectType,
    GraphQLObjectType,
    GraphQLOutputType} = graphql;
const _ = require('lodash');
var Sequelize = require('sequelize');



const sequelize = new Sequelize('gamedb', 'root', '', {
    host: 'localhost',
    dialect:  'mysql' 
  });

var dummydata = [{id:"0",bagarrey:"arfa"},
{id:"1",bagarrey:"sad"},
{id:"2",bagarrey:"mad"}];
var dummydataanother = [{id:"0",name:"hui"},
{id:"1",name:"ger"},
{id:"2",name:"mad"}];
const BagType = new GraphQLObjectType({
    name:"Bag",
    fields:()=>({
        id:{type:GraphQLID},
        bagarrey:{type:GraphQLString},
      
    })
})
const PlayerType= new GraphQLObjectType({
    name:"Player",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        Bag:{
            type:BagType,
            resolve(perent,args){
                console.log(perent)
                return _.find(dummydata,{id:perent.id})
            }
        
        }
    })
})
const RootQuery = new GraphQLObjectType ({
    name:"RootQueryType",
    fields:()=>({
        Bag:{
           type :BagType,
           args:{id:{type:GraphQLID}},
       resolve(perent, args) {
           console.log(typeof(args.id))
         return _.find(dummydata,{id:args.id})
       }
    },
    Player:{
        type :PlayerType,
        args:{id:{type:GraphQLID}},
    resolve(perent, args)  {
        console.log(typeof(args.id))
      return _.find(dummydataanother,{id:args.id})
    }
 }

})

});
module.exports = new GraphQLSchema({
    query: RootQuery
})