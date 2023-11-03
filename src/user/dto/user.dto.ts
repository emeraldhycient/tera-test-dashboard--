import { Field, ObjectType, Int } from '@nestjs/graphql';
import { BookDto } from 'src/book/dto/book.dto';

@ObjectType()
export class UserDto {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    // Exclude the password field from the GraphQL schema
    // password: string;

    @Field(type => [BookDto])
    books: BookDto[];
}