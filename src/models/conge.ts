import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Employe from "./employe";
import Company from "./company";


@Table({
    timestamps: false,
    tableName: "conge",
})

class Conge extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_conge!: number;

    @ForeignKey(()=>Employe)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_employe!: number;

    @ForeignKey(()=>Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_company!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    datedebut!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    datefin!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue:'actif'
    })
    status!: string;


    @BelongsTo(() => Employe, {
        foreignKey: "id_employe", 
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    employe!: Employe;

    @BelongsTo(() => Company, {
        foreignKey: "id_company", 
        onUpdate: "CASCADE",
    })
    company!: Company;

}


export default Conge;