import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.UserModel.create(createUserDto);
  }

  findOne(query: { name: string }): Promise<User> {
    return this.UserModel.findOne({ name: query.name }).exec();
  }

}
