import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Conge from "./conge";
import Employe from "./employe";
import Absence from "./absence";
import Appareil from "./appareil";
import Planning from "./planning";
import Jourtravailstandard from "./jourtravailstandard";
import Poste from "./poste";


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
        type: DataType.INTEGER,
        allowNull: false,
    })
    id_company_ext!: number;

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

    @HasMany(() => Conge)
    conges!: Conge[];

    @HasMany(() => Employe)
    employes!: Employe[];

    @HasMany(() => Absence)
    absence!: Absence[];

    @HasMany(() => Appareil)
    appareil!: Appareil[];

    @HasMany(() => Planning)
    planning!: Planning[];

    @HasMany(() => Jourtravailstandard)
    jourtravailstandard!: Jourtravailstandard[];

    @HasMany(() => Poste)
    poste!: Poste[];
}



export default Company;