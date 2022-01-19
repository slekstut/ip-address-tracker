module.exports = {
    publicPath: '/ip-address-tracker/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/_variables.scss";`
            }
        }
    }
};