import DotENV from 'dotenv';
DotENV.config();

import SampleMail from '../postoffice/sample-mail';

const newMail = new SampleMail({ to: 'shubham@truetechpro.com' });

newMail.send().then(_ => {
    console.log('Mail Sent Successfully');
}).catch(error => {
    console.log({ error });
});