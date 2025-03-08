import { AutoIncrement,  BelongsTo,  Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Employe from "./employe";
import Planning from "./planning";


@Table({
    timestamps: false,
    tableName: "jourtravailrotation",
})

class Jourtravailrotation extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_jourtravailrotation!: number;

    @ForeignKey(()=>Planning)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_planning!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    heuretravail!:number

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    heurerepos!:number

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    heurereprise!:Date
    

    @BelongsTo(() => Planning, {
        foreignKey: "id_planning", 
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    planning!: Planning;


   

}


export default Jourtravailrotation;