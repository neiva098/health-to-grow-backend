import {
    PrimaryGeneratedColumn,
    Column,
    BeforeUpdate,
    BeforeInsert,
    Entity,
} from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    public async compareHash(hash: string | Buffer): Promise<boolean> {
        return bcrypt.compare(hash, this.password);
    }

    public generateToken(): string {
        return jwt.sign({ id: this.id }, 'secret', {
            expiresIn: 86400,
        });
    }

    private async hashPassword(): Promise<void> {
        if (this.password) this.password = await bcrypt.hash(this.password, 8);
    }

    @BeforeUpdate()
    @BeforeInsert()
    private async triggerBeforeSave(): Promise<void> {
        await this.hashPassword();
    }
}
