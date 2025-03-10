import { AutoIncrement,  BelongsTo,  Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table, } from "sequelize-typescript";
import Employe from "./employe";
import Jourtravailrotation from "./jourtravailrotation";
import Jourtravailstandard from "./jourtravailstandard";
import Company from "./company";


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
    nom!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,

    })
    type!: string;


    @BelongsTo(() => Company, {
        foreignKey: "id_company", 
        onUpdate: "CASCADE",
    })
    company!: Company;

    @HasMany(() => Employe) 
    employes!: Employe[];
    
    @HasMany(() => Jourtravailrotation) 
    jourstravailrotation!: Jourtravailrotation[];
    
    @HasMany(() => Jourtravailstandard) 
    jourstravailstandard!: Jourtravailstandard[];

   
}


export default Planning;