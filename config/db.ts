import { Sequelize } from "sequelize-typescript";
import Employe from "../src/models/employe";
import User from "../src/models/user";
import Departement from "../src/models/departement";
import Company from "../src/models/company";
import Poste from "../src/models/poste";
import Zone from "../src/models/zone";
import Appareil from "../src/models/appareil";
import Conge from "../src/models/conge";
import Presence from "../src/models/presence";
import Absence from "../src/models/absence";
import Planning from "../src/models/planning";
import Jourtravailrotation from "../src/models/jourtravailrotation";
import Jourtravailstandard from "../src/models/jourtravailstandard";
import Parametre from "../src/models/parametre";

// Instance globale de Sequelize
export const sequelize = new Sequelize("checktime", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
  models: [Employe, User, Departement, Company, Poste, Zone, Appareil,Conge,Presence,Absence,Planning,Jourtravailrotation,Jourtravailstandard,Parametre],
});

// Fonction de connexion à la base de données
export const ConnectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");
    
    // Synchronisation des modèles
    await sequelize.sync({ alter: true });
    console.log("✅ Database synchronized.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};
