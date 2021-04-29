module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    pwa: {
        workboxPluginMode: "GenerateSW"
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/IT202-Spring2021-BigProject/'
        : '/'
}
