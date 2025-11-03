// Local: tic-api/src/users/entities/user.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' }) // Isso diz ao TypeORM para criar uma tabela chamada 'users'
export class User {
  @PrimaryGeneratedColumn('uuid') // Chave primária, gerada automaticamente como um ID único (UUID)
  id: string;

  @Column() // Uma coluna comum
  name: string;

  @Column({ unique: true }) // Uma coluna que não pode ter valores repetidos
  email: string;

  @Column( {select: false} )
  password: string; // Iremos criptografar isso antes de salvar!

  @CreateDateColumn({ name: 'created_at' }) // Coluna que registra a data de criação automaticamente
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' }) // Coluna que atualiza a data a cada modificação
  updatedAt: Date;
}