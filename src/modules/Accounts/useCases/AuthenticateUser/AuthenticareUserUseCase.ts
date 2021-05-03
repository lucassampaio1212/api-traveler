import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import AppError from "@shared/errors/appError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user:{
    name: string;
    email: string;
  }
  token: string;
}

@injectable()
export default class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}
  public async execute({email,password}:IRequest):Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError("Email or password incorrect!");
    }

    const passwordMath = await compare(password, user.password);

    if(!passwordMath){
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "7a62dcd6a72da3c7fdbba28d47ad3807",{
      subject: user.id,
      expiresIn: "1d"
    })

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

    return tokenReturn


  }
}
