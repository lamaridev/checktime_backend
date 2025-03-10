import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Employe from "./employe";
import Company from "./company";


@Table({
    timestamps: false,
    tableName: "absence",
})

class Absence extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_absence!: number;
    

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
    date!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    motif!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    document!: string;


    @BelongsTo(() => Employe, {
        foreignKey: "id_employe", 
        onUpdate: "CASCADE",
    })
    employe!: Employe;

    @BelongsTo(() => Company, {
        foreignKey: "id_company", 
        onUpdate: "CASCADE",
    })
    company!: Company;

}


export default Absence;