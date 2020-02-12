# Sending mail in typed express

## Using SMPT

1. Copy [src/crons/sample-cron.ts](../src/crons/sample-cron.ts) to your desired name in the same directory
2. Content of the file will be - 

``` typescript
    // TODO: Enhance the cron system
    const SampleCron = () => {
        console.log(new Date);
    }

    export default SampleCron;
```

3. Customize the exported method as per your wish.

4. Import the newly created class in [src/kernel/cron.ts](../src/kernel/cron.ts), add a `cron.schedule`

``` typescript
    import SampleCron from "../crons/sample-cron";

    /**
     * Some other crons 
     */


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
        // call your crons here every 5 sec
        SampleCron(); // enable when wanna send notifications
    });
```
