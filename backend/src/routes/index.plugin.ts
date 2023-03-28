import { FastifyPluginAsync } from 'fastify';

export const index_plugin: FastifyPluginAsync = async (app) => {
    app.get('/', (request, reply) => {
        return reply.view("index");
    });
};