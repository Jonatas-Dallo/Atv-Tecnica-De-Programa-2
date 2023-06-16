
import { Sequelize } from 'sequelize';



const db = new Sequelize("atvv", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
});



export default db;