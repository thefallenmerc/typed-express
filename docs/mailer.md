# Sending mail in typed express

## Using SMPT

1. Copy [src/postoffice/sample-mail.ts](../src/postoffice/sample-mail.ts) to your desired name in the same directory
2. Content of the file will be - 

``` typescript
import Mail from './mail';

export default class SampleMail extends Mail {
    prepare() {
        this.subject = "Sample Email";
        this.html = `
        Hi user,<br>
        This is a sample mail for <b>${this.other.name}</b>.<br>
        Please do something at <b>${this.other.time}</b>
        `;
    }
}
```

3. Customize the `prepare` method as per your wish, `this.other` contains the additional data we will use later.

4. Import the newly created class in your [controller]() or [route](), second argument to a mailer class is `other`

``` typescript
    const newMail = new SampleMail({ to: 'chaharshubhamsingh@gmail.com' }, {name: 'Shubham', time: '03 PM'});

    newMail.send().then(_ => {
        console.log('Mail Sent Successfully');
    }).catch(error => {
        console.log({ error });
    });
```
