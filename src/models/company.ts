import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    timestamps: false,
    tableName: "company",
})

class Company extends Model {
    @PrimaryKey
    @AutoIncrement
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
        allowNull: true,
    })
    telephone!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    nomcontact!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    numerocontact!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    adresse!: string;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    heurematin!: Date;

    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    heurepause!: Date;


    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    heurereprise!: Date;
    
    @Column({
        type: DataType.TIME,
        allowNull: false,
    })
    heurefin!: Date;


}


export default Company;