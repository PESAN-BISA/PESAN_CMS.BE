import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  user_name: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['ADMIN', 'ASSESSEE', 'ASSESSOR'] })
  role: 'ADMIN' | 'ASSESSEE' | 'ASSESSOR';

  @Column({ type: 'tinyint' })
  current_semester: 0 | 1 | 2 | 3 | 4;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
