import { Sequelize } from "sequelize-typescript";
import Employe from "../src/models/employe";
import User from "../src/models/user";
import Departement from "../src/models/departement";
import Company from "../src/models/company";
import Poste from "../src/models/poste";
import Zone from "../src/models/zone";
import Appareil from "../src/models/appareil";

export const ConnectionDB = async () => {
  const sequelize = new Sequelize("checktime", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306, 
    logging: false,
    models:[Employe,User,Departement,Company,Poste,Zone,Appareil]
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  sequelize.sync({alter:true});
  
};
