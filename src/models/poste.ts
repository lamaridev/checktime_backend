import { AutoIncrement,  Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Employe from "./employe";


@Table({
    timestamps: false,
    tableName: "poste",
})

class Poste extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_poste!: number;

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

    @HasMany(() => Employe) 
    employes!: Employe[];
   

}


export default Poste;