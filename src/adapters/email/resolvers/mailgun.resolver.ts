import * as Mailgun from "mailgun-js";

const _mailGunKey_ = "e1c2fa37a178e9bf32efdce9a82f4c1d-a0cfb957-1fdb4440";
const _domain_ = "sandboxecdedd4aa16c4d56accaf4535176153a.mailgun.org";

export class MailgunResolver {

  static sendEmail( to: string, subject: string, content: string ) {

    const client = new Mailgun( { apiKey: _mailGunKey_, domain: _domain_ } );

    const data = {
      from   : "space44-test@mailgunbox.com",
      to     : to,
      subject: subject,
      text   : content
    };

    return client.messages().send( data );
  }
}

