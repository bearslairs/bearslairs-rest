import CustomerRepository from '../repository/customer';

class CustomerController {
  static create(request, response) {
    CustomerRepository
      .create(request.body)
      .then((customer) => {
        response.json(customer);
      })
      .catch((error) => {
        response.status(500).json({
          error,
        });
      });
  }
}

export default CustomerController;