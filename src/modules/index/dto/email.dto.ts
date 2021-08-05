import { IsEmail, IsEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Email }                                            from "../interfaces/email";

export class EmailDto implements Email {
  @IsEmail()
  to: string;

  @IsString()
  @MinLength( 2 )
  @MaxLength( 100 )
  subject: string;

  @IsString()
  @IsEmpty()
  @MinLength( 2 )
  @MaxLength( 100 )
  content: string;
}

