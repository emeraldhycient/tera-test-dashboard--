import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { AuthGuard } from '@nestjs/passport';
import {  UseGuards } from '@nestjs/common';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  @UseGuards(AuthGuard('auth0'))
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'book' })
  @UseGuards(AuthGuard('auth0'))
  findAll() {
    return this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  @UseGuards(AuthGuard('auth0'))
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => Book)
  @UseGuards(AuthGuard('auth0'))
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  @UseGuards(AuthGuard('auth0'))
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
}
