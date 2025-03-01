import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Zone from "./zone";


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
        unique: true
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
}


export default Appareil;