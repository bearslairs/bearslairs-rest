var mongoose = require('../connection');

const CustomerModel = mongoose.model(
  'Customer',
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    telephone: {
      type: String,
      required: true
    }/*,
    reservations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reservation'
      }
    ]*/
  }),
  'Customer'
);

export default CustomerModel;