import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import Zone from "./zone";
import Company from "./company";


@Table({
    timestamps: false,
    tableName: "appareil",
})

class Appareil extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_appareil!: number;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_appareil_ext!: number;

    @ForeignKey(()=>Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_company!: number;

    @ForeignKey(() => Zone)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_zone!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nom!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    addresseip!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    numeroserie!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    modetransfert!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    fuseauhoraire!: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    battement!: number;

    

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:false
    })
    dispositifenregistrement!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:true
    })
    appareilpresence!: boolean;

    @BelongsTo(() => Zone, {
        foreignKey: "id_zone", 
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    zone!: Zone;

    @BelongsTo(() => Company, {
        foreignKey: "id_company", 
        onUpdate: "CASCADE",
    })
    company!: Company;
}


export default Appareil;