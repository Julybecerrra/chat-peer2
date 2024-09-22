import { Table, Model, Column, DataType, AllowNull, PrimaryKey, AutoIncrement, ForeignKey } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: 'conversions',
})

export class Convert extends Model{
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  from!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  to!: string

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  resultado!: number

}