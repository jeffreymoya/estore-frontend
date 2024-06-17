/* eslint-disable import/no-extraneous-dependencies */
import {defineConfig} from 'checkly';
import {EmailAlertChannel, Frequency} from 'checkly/constructs';

const emailChannel = new EmailAlertChannel('email-channel-1', {
    address: 'jeffreymoya@gmail.com',
    sendDegraded: true,
});

export const config = defineConfig({
    projectName: 'ESTORE',
    logicalId: 'estore-frontend',
    repoUrl: 'https://github.com/jeffreymoya/estore-frontend',
    checks: {
        locations: ['us-east-1', 'eu-west-1'],
        tags: ['website'],
        runtimeId: '2023.09',
        environmentVariables: [
            {
                key: 'PRODUCTION_URL',
                value: 'https://google.com',
            },
        ],
        browserChecks: {
            frequency: Frequency.EVERY_24H,
            testMatch: '**/tests/e2e/**/*.check.spec.ts',
            alertChannels: [emailChannel],
        },
    },
    cli: {
        runLocation: 'eu-west-1',
        reporters: ['list'],
    },
});

export default config;
