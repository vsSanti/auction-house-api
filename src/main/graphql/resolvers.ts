export default {
  Query: {
    helloWorld: (parent: any, args: any, context: any) => {
      return {
        id: 1,
        message: 'Hello World!'
      }
    }
  }
}