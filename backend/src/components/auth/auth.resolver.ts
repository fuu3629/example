import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from 'src/components/auth/auth.service';
import { LoginResponse } from 'src/components/auth/dto/login-response';
import { LoginUserInput } from 'src/components/auth/dto/login-user.input';
import { GqlAuthGuard } from 'src/components/auth/guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }
}
