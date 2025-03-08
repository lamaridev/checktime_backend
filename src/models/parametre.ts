 import { AutoIncrement, Column, DataType, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./user";


@Table({
    timestamps: false,
    tableName: "parametre",
})

class Parametre extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_parametre!: number;

    @Column({
        type: DataType.ENUM('journalier','hebdo','mensuel'),
        allowNull: false,
        defaultValue:'mensuel'
    })
    type!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:true
    })
    absc!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:true
    })
    retard!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:true
    })
    conge!: boolean;
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:true
    })
    pointretardabsc!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:true
    })
    etatponct!: boolean;


    @HasOne(() => User) 
    user!: User;


}


export default Parametre;
