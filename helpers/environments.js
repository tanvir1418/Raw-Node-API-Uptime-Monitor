/* eslint-disable operator-linebreak */
// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'dafdhalhfladjklljd',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16786193804',
        accountSid: 'AC5955b300a30e0c23f6d48b80e6a27245',
        authToken: '4408522427d082d42d91afd51b4a0863',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'ldafhncnvafgljejdl',
    maxChecks: 5,
    twilio: {
        fromPhone: '+16786193804',
        accountSid: 'AC5955b300a30e0c23f6d48b80e6a27245',
        authToken: '4408522427d082d42d91afd51b4a0863',
    },
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
