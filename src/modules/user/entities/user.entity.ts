import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar' })
  user_name: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['ADMIN', 'ASSESSEE', 'ASSESSOR'] })
  role: 'ADMIN' | 'ASSESSEE' | 'ASSESSOR';

  @Column({ type: 'tinyint' })
  current_semester: 1 | 2 | 3 | 4;
}
