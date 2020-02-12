import SampleCron from "../crons/sample-cron";

const cron = require('node-cron');

export default () => {

    /**
     *             ┌────────────── second (optional)
     *             │ ┌──────────── minute
     *             │ │ ┌────────── hour
     *             │ │ │ ┌──────── day of month
     *             │ │ │ │ ┌────── month
     *             │ │ │ │ │ ┌──── day of week
     *             │ │ │ │ │ │
     *             │ │ │ │ │ │
     *             * * * * * *
     */
    cron.schedule('*/5 * * * * *', _ => {
        // call your crons here
        // SampleCron(); // enable when wanna send notifications
    });

};