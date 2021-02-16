db.createCollection('employees', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'firstName',
        'lastName',
        'address1',
        'city',
        'country',
        'wage',
        'position',
        'isActive'
      ],
      properties: {
        'firstName': {
          bsonType: 'string',
        },
        'lastName': {
          bsonType: 'string'
        },
        'address1': {
          bsonType: 'string'
        },
        'address2': {
          bsonType: 'string'
        },
        'city': {
          bsonType: 'string'
        },
        'state': {
          bsonType: 'string'
        },
        'country': {
          bsonType: 'string'
        },
        'zipcode': {
          bsonType: 'string'
        },
        'wage': {
          bsonType: 'decimal'
        },
        'startDate': {
          bsonType: 'date'
        },
        'username': {
          bsonType: 'string'
        },
        'position': {
          bsonType: 'string'
        },
        'isActive': {
          bsonType: 'bool'
        }
      }
    }
  }
});


