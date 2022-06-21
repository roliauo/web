module.exports = { 
    "presets": [ 
        "@babel/preset-react", 
        "@babel/preset-env" 
    ], 
    "plugins": [ 
        "@babel/plugin-syntax-dynamic-import", 
        "@babel/plugin-proposal-class-properties", 
        "@babel/plugin-proposal-export-namespace-from", 
        "@babel/plugin-proposal-throw-expressions", 
        "@babel/plugin-transform-async-to-generator", 
    ], 
    env: { 
        test: { 
            presets: [ 
                '@babel/preset-env', 
                '@babel/preset-react', 
            ], 
            plugins: [ 
                '@babel/plugin-proposal-class-properties', 
                '@babel/plugin-syntax-dynamic-import', 
                'require-context-hook' 
            ], 
        }, 
    }, 
};