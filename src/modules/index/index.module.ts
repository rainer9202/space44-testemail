import { Module }          from "@nestjs/common";
import { IndexController } from "./index.controller";
import { IndexService }    from "./index.service";

import { EmailAdapter } from "src/adapters/email/email.adapter";

@Module( {
  imports    : [],
  controllers: [ IndexController ],
  providers  : [ IndexService, EmailAdapter ]
} )
export class IndexModule {
}
