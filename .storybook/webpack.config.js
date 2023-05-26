const path = require('path'); 

module.exports = ({ config }) => { 
    config.resolve.alias = { 
        ...config.resolve.alias, 
        '/assets': path.resolve(__dirname, '../public/assets'), 
    }; 
    return config; 
};