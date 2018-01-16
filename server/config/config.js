
const config = {
    development: {
        port: 3000,
        firebase: {
            apiKey: "AIzaSyDCwbUKZdqBF1rb1cRD5nWwqIMX3szL-2w",
            authDomain: "crypto-monitor-a09a0.firebaseapp.com",
            databaseURL: "https://crypto-monitor-a09a0.firebaseio.com",
            projectId: "crypto-monitor-a09a0",
            storageBucket: "crypto-monitor-a09a0.appspot.com",
            messagingSenderId: "461645356201"
        }        
    },
    production: {
        firebase: {
            apiKey: "AIzaSyDCwbUKZdqBF1rb1cRD5nWwqIMX3szL-2w",
            authDomain: "crypto-monitor-a09a0.firebaseapp.com",
            databaseURL: "https://crypto-monitor-a09a0.firebaseio.com",
            projectId: "crypto-monitor-a09a0",
            storageBucket: "crypto-monitor-a09a0.appspot.com",
            messagingSenderId: "461645356201"
        }
    }
};

module.exports = config;