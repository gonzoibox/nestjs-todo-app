import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

@Entity()
export class Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  @MinLength(1, { always: true })
  todo: string;

  @ApiProperty()
  @Column({ default: false })
  isCompleted: boolean;

  @ApiProperty()
  @Column()
  position: number;
}
