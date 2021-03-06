import { Injectable } from "@nestjs/common";

import { Email }        from "./interfaces/email";
import { EmailAdapter } from "../../adapters/email/email.adapter";

@Injectable()
export class IndexService {
  private readonly emails: Email[];

  constructor( private readonly emailAdapter: EmailAdapter ) {
    this.emails = [];
  }

  getEmails() {
    return this.emails;
  }

  // Send email using SparkPost and MailGun
  async sendEmail( to, subject, content ) {

    const result = await this.emailAdapter.useSparkPost( to, subject, content );

    if ( result.errors ) {
      const result = this.emailAdapter.useMailGun( to, subject, content );
      this.pushEmail( to, subject, content, result.id );
      if ( result.error ) {
        return {
          state: "Error"
        };
      }
    }

    this.pushEmail( to, subject, content, result.id );
    return {
      state: "Ok"
    };
  }

  // Push the email in the array to show in view
  pushEmail( to: string, subject: string, content: string, idConfirmation: string ) {
    this.emails.push( { to, subject, content, idConfirmation } );
  }

}
