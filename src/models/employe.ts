import { AutoIncrement,  BelongsTo,  Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Poste from "./poste";
import Zone from "./zone";
import Departement from "./departement";
import Conge from "./conge";
import Planning from "./planning";
import Absence from "./absence";
import Company from "./company";


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
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_employe_ext!: number;

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


    @ForeignKey(()=>Planning)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_planning!: number;


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


    @BelongsTo(() => Planning, {
        foreignKey: "id_planning", 
        onUpdate: "CASCADE",
    })
    planning!: Planning;


    @BelongsTo(() => Company, {
        foreignKey: "id_company", 
        onUpdate: "CASCADE",
    })
    company!: Company;

    @HasMany(() => Conge) 
    conges!: Conge[];


    @HasMany(() => Absence) 
    absences!: Absence[];





}


export default Employe;