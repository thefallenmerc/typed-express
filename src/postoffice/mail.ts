import Transporter from '../kernel/transporter';

export default class Mail {

    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
    other: object | any;

    /**
     * 
     * @param {*} options.from from id and optional user name  as "<user name>" prefixed 
     * @param {*} options.to comma seperated email ids 
     * @param {*} options.subject Mail subject 
     * @param {*} options.text Mail text version 
     * @param {*} options.html Mail html version 
     * 
     */
    constructor({
        from = null, to = null, subject = null, text = null, html = null
    }, other = {}) {
        this.from = from || process.env.MAIL_USER;
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.html = html;

        this.other = other;

        this.prepare();
    }

    prepare() { }

    send() {
        return Transporter.sendMail({
            from: this.from,
            to: this.to,
            subject: this.subject,
            text: this.text,
            html: this.html
        })
            .catch(err => {
                console.log(err);
                console.log('error occured sending mail');
            });
    }
}