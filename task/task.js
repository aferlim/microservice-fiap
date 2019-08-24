const Joi = require('@hapi/joi')

const tasks = (server) => {
  server.route({
    method: 'GET',
    path: '/task',
    handler: () => ({ id: 1, name: 'Não interromper o professor' }),
    options: {
      description: 'Get Tasks',
      notes: 'Returns a task list',
      tags: ['api'],
    },
  })

  server.route({
    method: 'GET',
    path: '/task/{id}',
    handler: () => ({ id: 1, name: 'Não interromper o professor' }),
    options: {
      description: 'Get an especific task',
      notes: 'Returns a task item by the id',
      tags: ['api'], // ADD THIS TAG
      validate: {
        params: {
          id: Joi.number()
            .required()
            .description('the id for the task item'),
        },
      },
    },
  })
}

module.exports = tasks
