/**
* Post_sets.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        status: {
            type: 'string',
            enum: ['published', 'draft'],
            defaultsTo: 'draft'
        },
        category: {
            model: 'categories'
        },
        location: {
            type: 'string'
        }
  }
};

