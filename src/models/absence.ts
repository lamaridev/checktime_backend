import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    timestamps: false,
    tableName: "absence",
})

class Absence extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_absence!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    motif!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    document!: string;

}


export default Absence;