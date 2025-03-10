import { AutoIncrement,  Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Employe from "./employe";


@Table({
    timestamps: false,
    tableName: "departement",
})

class Departement extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_departement!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_departement_ext!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nom!: string;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue:0
    })
    nombreemploye!: number;

    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue:0
    })
    nombreappareil!: number;


    @HasMany(() => Employe) 
    employes!: Employe[];
   

}


export default Departement;