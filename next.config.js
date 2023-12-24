/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kitish-bucket.s3.ap-south-1.amazonaws.com',
            }
        ]
    }
}

module.exports = nextConfig
