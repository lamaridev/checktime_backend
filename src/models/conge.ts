import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Employe from "./employe";


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

}


export default Conge;