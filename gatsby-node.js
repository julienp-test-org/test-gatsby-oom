/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

 exports.createPages = async ({ graphql, actions }) => { 
   const arrays = []
   while (true) {
    console.log(process.memoryUsage())
    arrays.push(new Array(1024 * 1024 * 512).fill(1))
    await new Promise(resolve => setTimeout(resolve, 2 * 1000))
  }
 }
