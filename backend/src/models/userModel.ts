import { Table, Model, Column, DataType, AllowNull, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
 timestamps: true,
 tableName: 'users',
})

export class User extends Model {
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password_user!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string

}

