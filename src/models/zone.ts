import { AutoIncrement,  Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Appareil from "./appareil";
import Employe from "./employe";


@Table({
    timestamps: false,
    tableName: "zone",
})

class Zone extends Model {
    @PrimaryKey
    @AutoIncrement
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
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue:0
    })
    nombreemploye!: number;

    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue:0
    })
    nombreappareil!: number;


    @HasMany(() => Appareil) 
    appareils!: Appareil[];

    @HasMany(() => Employe) 
    employes!: Employe[];
   

}


export default Zone;