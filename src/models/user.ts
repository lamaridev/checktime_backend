import { AutoIncrement,  BelongsTo,  Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import Parametre from "./parametre";
import Company from "./company";


@Table({
    timestamps: false,
    tableName: "user",
})

class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_user!: number;

    @ForeignKey(()=>Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        defaultValue:null
    })
    id_company!: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue:null
    })
    nomcompany!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nomcomplet!: string;


    @Column({
        type: DataType.ENUM('admin','simple'),
        allowNull: false,
    })
    role!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        // unique:true

    })
    email!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue:true
    })
    enabled!: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    resetpasswordtoken!: string;


    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    resetpasswordtokenexpire!: Date;

    @BelongsTo(() => Company, {
        foreignKey: "id_company", 
        onUpdate: "CASCADE",
    })
    company!: Company;


    @HasOne(() => Parametre) 
    parametre!: Parametre;

   

}


export default User;