import CustomerModel from '../model/customer';

class CustomerRepository {
  constructor(customerModel) {
    this.customerModel = customerModel;
  }
  create(customer) {
    return this.customerModel.create(customer);
  }
}

export default new CustomerRepository(CustomerModel);