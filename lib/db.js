import path from 'path'
import db from 'mysql-chassis'

db.init({
  host: 'localhost',
  database: 'rockit',
  user: 'root',
  password: '',
  sqlPath: path.resolve('sql')
});

export default db
