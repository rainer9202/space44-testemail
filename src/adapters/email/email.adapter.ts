import { Injectable } from "@nestjs/common";

import { MailgunResolver }   from "./resolvers/mailgun.resolver";
import { SparkPostResolver } from "./resolvers/sparkPost.resolver";

@Injectable()
export class EmailAdapter {
  useMailGun( to, subject, content ) {
    return MailgunResolver.sendEmail(
      to, subject, content
    ).then( ( results ) => {
        return results;
      }
    ).catch( error => {
      return error;
    } );
  }

  useSparkPost( to, subject, content ) {
    return SparkPostResolver.sendEmail(
      to, subject, content
    ).then( ( { results } ) => {
        return results;
      }
    ).catch( error => {
      return error;
    } );
  }
}
