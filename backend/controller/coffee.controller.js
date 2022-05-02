import { CoffeeService } from '../service/coffee.service.js';
import Response from '../model/response.model.js';

export class CoffeeController {
  static findCoffee = async (req, res, next) => {
    try {
      const result = await CoffeeService.findCoffeeById(req.params);
      return res
        .status(200)
        .json(new Response(200, 'success', '커피 조회 성공', result));
    } catch (err) {
      next(err);
    }
  };

  static createCoffee = async (req, res, next) => {
    try {
      const result = await CoffeeService.createCoffee(req.body);
      return res
        .status(201)
        .json(new Response(201, 'success', '커피 생성 성공', result));
    } catch (err) {
      next(err);
    }
  };

  static removeCoffee = async (req, res, next) => {
    try {
      const result = await CoffeeService.removeCoffee(req.params);
      return res
        .status(200)
        .json(new Response(200, 'success', '커피 삭제 성공', result));
    } catch (err) {
      next(err);
    }
  };
}
