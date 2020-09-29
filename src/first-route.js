async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => "Hello World!");
}

module.exports = routes;
