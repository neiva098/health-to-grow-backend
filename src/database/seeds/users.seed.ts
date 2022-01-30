import { User } from '../../Modules/User/entity';

export default Object.assign(new User(), {
    name: 'Joao',
    email: 'teste@gmail.com',
    password: 'senhaDeTeste',
});
