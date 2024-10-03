/** @type {import('next').NextConfig} */
const nextConfig = {
    turbo: {
        resolveExtensions: [
          '.mdx',
          '.tsx',
          '.ts',
          '.jsx',
          '.js',
          '.mjs',
          '.json',
          '.svg',
        ],
      },
};

export default nextConfig;
