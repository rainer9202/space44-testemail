import { Injectable } from "@nestjs/common";
import { Email }      from "../../modules/index/interfaces/email";

import { MailgunResolver }   from "./resolvers/mailgun.resolver";
import { SparkPostResolver } from "./resolvers/sparkPost.resolver";

@Injectable()
export class EmailAdapter {
  useMailGun( email: Email ) {
    return MailgunResolver.sendEmail(
      email.to,
      email.subject,
      email.content
    ).then( ( results ) => {
        return results;
      }
    ).catch( error => {
      return error;
    } );
  }

  useSparkPost( email: Email ) {
    return SparkPostResolver.sendEmail(
      email.to,
      email.subject,
      email.content
    ).then( ( { results } ) => {
        return results;
      }
    ).catch( error => {
      return error;
    } );
  }
}
