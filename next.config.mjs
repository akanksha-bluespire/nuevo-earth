/** @type {import('next').NextConfig} */
import withFonts from'next-fonts' ;

export default withFonts({
    webpack(config, options) {
        return config;
    },
});
