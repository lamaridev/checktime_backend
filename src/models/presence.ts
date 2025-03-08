import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    timestamps: false,
    tableName: "presence",
})

class Presence extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_presence!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date;

    @Column({
        type: DataType.TIME,
        allowNull: true,
    })
    heureentre!: Date;
    
    @Column({
        type: DataType.ENUM('presence','retard'),
        allowNull: false,
    })
    type!: string;


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


export default Presence;