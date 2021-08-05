import * as SparkPost from "sparkpost";

const _sparkPostKey_ = "23d3139fda44d930117b6e7add3436ba4a88ed5b";

export class SparkPostResolver {

  static sendEmail( to: string, subject: string, content: string ) {
    const client = new SparkPost( _sparkPostKey_ );

    return client.transmissions.send( {
        options   : {
          sandbox: true
        },
        content   : {
          from   : "space44-test@sparkpostbox.com",
          subject: subject,
          html   : `<html><body><p>${ content }</p></body></html>`
        },
        recipients: [
          { address: to }
        ]
      }
    );
  }
}

