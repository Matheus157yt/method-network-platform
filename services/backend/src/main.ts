import Fastify from 'fastify';

const app = Fastify({ logger: true });

app.get('/health', async (req, reply) => {
  return { status: 'ok' };
});

// sample course endpoint
app.get('/api/courses', async (req, reply) => {
  return [{ id: 1, title: 'Método Network - Módulo 1' }];
});

const start = async () => {
  try {
    await app.listen({ port: 4000, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
