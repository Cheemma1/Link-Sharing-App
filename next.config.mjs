// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lgnutimklzblagoeacrf.supabase.co',
          port: '', // Leave this empty unless you're using a non-standard port
          pathname: '/storage/v1/object/public/profile-image/**', // Adjust the path as needed
        },
      ],
    },
  };
  
  export default nextConfig;
  
  
