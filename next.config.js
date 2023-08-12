/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "global-s3.s3.us-west-2.amazonaws.com"
        ],
      },
}

module.exports = nextConfig
