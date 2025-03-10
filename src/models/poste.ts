import { AutoIncrement,  BelongsTo,  Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Employe from "./employe";
import Company from "./company";


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
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_poste_ext!: number;

    @ForeignKey(()=>Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_company!: number;


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

    @BelongsTo(() => Company, {
        foreignKey: "id_company", 
        onUpdate: "CASCADE",
    })
    company!: Company;
   

}


export default Poste;