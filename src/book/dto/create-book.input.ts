import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  image: string;

  @Field()
  @IsString()
  author: string;

  @Field()
  @IsString()
  description: string;

  @Field(type => Int)
  @IsInt()
  userId: number;
}
