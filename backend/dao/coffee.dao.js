import Mysql from '../config/mysql.config.js';

export class CoffeeDao {
  static findCoffeeByName = async (name) => {
    const sql = 'SELECT * FROM coffee WHERE name = ?';
    const param = [name];
    const [coffees] = await Mysql.execute(sql, param);

    return coffees;
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
}
