import { AutoIncrement,  BelongsTo,  Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Poste from "./poste";
import Zone from "./zone";
import Departement from "./departement";


@Table({
    timestamps: false,
    tableName: "employe",
})

class Employe extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_employe!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nomcomplet!: string;

    @ForeignKey(()=>Departement)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_departement!: number;

    @ForeignKey(()=>Poste)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_poste!: number;

    @ForeignKey(()=>Zone)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_zone!: number;


    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
    })
    empreinte!: boolean;



    @BelongsTo(() => Poste, {
        foreignKey: "id_poste", 
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    poste!: Poste;

    @BelongsTo(() => Zone, {
        foreignKey: "id_zone", 
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    zone!: Zone;

    @BelongsTo(() => Departement, {
        foreignKey: "id_departement", 
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    departement!: Departement;





}


export default Employe;