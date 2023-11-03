import { Field, ObjectType, Int } from '@nestjs/graphql';
import { UserDto } from 'src/user/dto/user.dto';

@ObjectType()
export class BookDto {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    image: string;

    @Field()
    author: string;

    @Field()
    description: string;

    @Field(type => UserDto)
    user: UserDto;
}