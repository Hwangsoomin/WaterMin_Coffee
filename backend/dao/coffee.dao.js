import Mysql from '../config/mysql.config.js';

export class CoffeeDao {
  static findCoffeeByName = async (name) => {
    const sql = 'SELECT * FROM coffee WHERE name = ?';
    const param = [name];
    const [coffees] = await Mysql.execute(sql, param);

    return coffees;
  };

  static findCoffeeById = async (id) => {
    const sql = 'SELECT * FROM coffee WHERE _id = ?';
    const param = [id];
    const [coffee] = await Mysql.execute(sql, param);

    return coffee;
  };

  static createCoffee = async (coffee) => {
    const sql =
      'INSERT INTO coffee(name, description, calory, protein, sodium, caffeine) VALUES(?,?,?,?,?,?)';
    const param = [
      coffee.name,
      coffee.description,
      coffee.calory,
      coffee.protein,
      coffee.sodium,
      coffee.caffeine,
    ];
    return await Mysql.execute(sql, param);
  };

  static removeCoffee = async (id) => {
    const sql = 'DELETE FROM coffee WHERE _id = ?';
    const param = [id];

    return await Mysql.execute(sql, param);
  };
}
