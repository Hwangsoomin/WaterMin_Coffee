import { CoffeeDao } from '../dao/coffee.dao.js';
import handleError from '../model/error.model.js';

export class CoffeeService {
  static findCoffeeById = async (req) => {
    const coffee = await CoffeeDao.findCoffeeById(req.id);
    if (coffee.length === 0) {
      throw new handleError(404, 'Coffee Id Not Found');
    }

    return coffee;
  };

  static createCoffee = async (req) => {
    const coffee = await CoffeeDao.findCoffeeByName(req.name);
    if (coffee.length !== 0) {
      throw new handleError(409, 'Coffee already exist');
    }

    await CoffeeDao.createCoffee(req);
    return;
  };

  static removeCoffee = async (req) => {
    const coffee = await CoffeeDao.findCoffeeById(req.id);
    if (coffee.length === 0) {
      throw new handleError(404, 'Coffee Id Not Found');
    }

    await CoffeeDao.removeCoffee(req.id);
  };
}
