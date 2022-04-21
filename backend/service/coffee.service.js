import { CoffeeDao } from '../dao/coffee.dao.js';
import handleError from '../model/error.model.js';

export class CoffeeService {
  static createCoffee = async (req) => {
    const coffee = await CoffeeDao.findCoffeeByName(req.name);
    if (coffee.length !== 0) {
      throw new handleError(409, 'Coffee already exist');
    }

    await CoffeeDao.createCoffee(req);
    return;
  };
}
