import CredentialsProvider from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from "next-auth"
import LinkedInProvider from "next-auth/providers/linkedin";
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        FacebookProvider({
            clientId: process.env.AUTH_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET
          }),
          GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret:process.env.AUTH_GOOGLE_CLIENT_SECRET
          }),
          LinkedInProvider({
            clientId: process.env.AUTH_LINKEDIN_CLIENT_ID,
            clientSecret: process.env.AUTH_LINKEDIN_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
          }),     
          TwitterProvider({
            clientId: process.env.AUTH_TWITTER_CLIENT_ID,
            clientSecret: process.env.AUTH_TWITTER_CLIENT_SECRET
          }),
        // CredentialsProvider({
        //     name: "credentials",
        //     // The credentials object is what's used to generate Next Auths default login page - We will not use it however.
        //     credentials: {
        //         email: {label: "Email", type: "email"},
        //         password: {label: "Password", type: "password"}
        //     },
        //     // Authorize callback is ran upon calling the signin function
        //     authorize: async (credentials) => {
        //         dbConnect()

        //         // Try to find the user 
        //         const user = await User.findOne({email: credentials.email}).select('+password')

        //         if(!user) { throw new Error('No user with a matching email was found.')}

        //         // Use the comparePassword method
        //         const pwValid = await user.comparePassword(credentials.password)

        //         if(!pwValid){ throw new Error("Your password is invalid") }

        //         return user;
        //     }

            
        // }),
       
    ],
    
})