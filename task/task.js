const Joi = require('@hapi/joi')

const tasks = (server) => {
  server.route({
    method: 'GET',
    path: '/task',
    handler: () => ({ id: 1, name: 'Não interromper o professor' }),
    options: {
      description: 'Get todo',
      notes: 'Returns a todo item by the id passed in the path',
      tags: ['api'],
    },
  })

  server.route({
    method: 'GET',
    path: '/task/{id}',
    handler: () => ({ id: 1, name: 'Não interromper o professor' }),
    options: {
      description: 'Get todo',
      notes: 'Returns a todo item by the id passed in the path',
      tags: ['api'], // ADD THIS TAG
      validate: {
        params: {
          id: Joi.number()
            .required()
            .description('the id for the todo item'),
        },
      },
    },
  })
}

module.exports = tasks
