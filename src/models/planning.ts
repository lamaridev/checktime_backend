import { AutoIncrement,  Column, DataType, HasMany, Model, PrimaryKey, Table, } from "sequelize-typescript";
import Employe from "./employe";
import Jourtravailrotation from "./jourtravailrotation";
import Jourtravailstandard from "./jourtravailstandard";


@Table({
    timestamps: false,
    tableName: "planning",
})

class Planning extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_planning!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nom!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,

    })
    type!: string;


    @HasMany(() => Employe) 
    employes!: Employe[];
    
    @HasMany(() => Jourtravailrotation) 
    jourstravailrotation!: Jourtravailrotation[];
    
    @HasMany(() => Jourtravailstandard) 
    jourstravailstandard!: Jourtravailstandard[];

   
}


export default Planning;