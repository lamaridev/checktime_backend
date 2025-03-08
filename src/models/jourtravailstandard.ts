import { AutoIncrement,  BelongsTo,  Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Planning from "./planning";


@Table({
    timestamps: false,
    tableName: "Jourtravailstandard",
})

class Jourtravailstandard extends Model {
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_jourtravailstandard!: number;


    @ForeignKey(()=>Planning)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_planning!: number;


    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    heuredebut!: Date;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    heurefin!: Date;

    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,

    })
    isnext!: boolean;
    

    @BelongsTo(() => Planning, {
        foreignKey: "id_planning", 
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    planning!: Planning;



   

}


export default Jourtravailstandard;