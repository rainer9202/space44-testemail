import { Body, Controller, Get, Req, Post, Render, Res } from "@nestjs/common";

import { EmailDto }     from "./dto/email.dto";
import { IndexService } from "./index.service";

@Controller()
export class IndexController {

  constructor(
    private readonly indexServices: IndexService
  ) { }

  @Get( "/" )
  @Render( "index" )
  index( @Req() request ) {

    if ( !request.query.state ) {
      return { emails: this.indexServices.getEmails() };
    }

    if ( request.query.state === "Error" ) {
      return { emails: this.indexServices.getEmails(), error: true };
    }

    return { emails: this.indexServices.getEmails(), success: true };

  }

  @Post( "send-email" )
  async sendEmail( @Body() dto: EmailDto, @Res() response ) {
    const { to, subject, content } = dto;
    const data = await this.indexServices.sendEmail( to, subject, content );
    if ( data.state === "OK" ) response.redirect( "/?state=OK" );
    response.redirect( "/?state=Error" );
  }

}
