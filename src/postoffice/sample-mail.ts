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