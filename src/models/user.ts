import { AutoIncrement,  Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


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
        unique:true,
        allowNull: false,
    })
    email!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

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

   

}


export default User;