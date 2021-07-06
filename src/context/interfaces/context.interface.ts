import { UserEntity } from '../../domain/user/user.entity';

export interface IContextPublic<> {
  user?: UserEntity;
}

export interface IContext extends IContextPublic {
  setUser(user?: UserEntity): void;
}
