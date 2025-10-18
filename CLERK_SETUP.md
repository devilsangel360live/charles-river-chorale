# Clerk Authentication Setup Guide

This guide will walk you through setting up Clerk authentication for the Charles River Chorale website.

## Prerequisites

✅ Clerk package already installed (`@clerk/astro`)
✅ Astro config already updated
✅ Member Area page created

## Step-by-Step Setup

### 1. Create a Clerk Account

1. Go to [https://clerk.com](https://clerk.com)
2. Click "Start Building for Free"
3. Sign up with your email or GitHub account
4. Verify your email address

### 2. Create a New Application

1. Once logged in, click "Create Application"
2. Name your application: `Charles River Chorale`
3. Choose authentication methods:
   - ✅ Email (recommended)
   - ✅ Password (recommended)
   - Optional: Google, Facebook, etc.
4. Click "Create Application"

### 3. Get Your API Keys

1. In your Clerk dashboard, go to **API Keys** (left sidebar)
2. You'll see two keys:
   - **Publishable Key** (starts with `pk_test_...`)
   - **Secret Key** (starts with `sk_test_...`)
3. Keep this page open - you'll need these keys next

### 4. Add Environment Variables

1. In your project root (`/Users/arindam.pal/Projects/CRC Website 2025/crc-website/`), create a `.env` file:

```bash
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
```

2. Replace `pk_test_your_key_here` and `sk_test_your_key_here` with your actual keys from Step 3

3. **IMPORTANT**: Make sure `.env` is in your `.gitignore` file (it should be by default)

### 5. Update the Member Area Page

Once you have Clerk configured, you'll need to add authentication to the member page. Here's what to do:

**Option A: Simple Protected Page** (Recommended to start)

Replace the content in `src/pages/members.astro` with a protected version that requires login.

**Option B: Login/Signup Buttons**

Add Clerk's pre-built components to show login/signup modals.

**I can help you implement either option once you've completed steps 1-4 above.**

## For Netlify Deployment

### 1. Add Environment Variables to Netlify

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add both variables:
   - Variable: `PUBLIC_CLERK_PUBLISHABLE_KEY`, Value: `pk_test_...`
   - Variable: `CLERK_SECRET_KEY`, Value: `sk_test_...`

### 2. Update Clerk Dashboard for Production

When you deploy to Netlify:

1. In Clerk dashboard, go to **Domains**
2. Add your Netlify domain (e.g., `your-site-name.netlify.app`)
3. If you have a custom domain, add that too

### 3. Create Production Keys (Later)

For production, you'll want to:

1. In Clerk, switch from "Development" to "Production" mode
2. Get new production keys (start with `pk_live_...` and `sk_live_...`)
3. Update Netlify environment variables with production keys

## Testing Locally

After completing steps 1-4:

```bash
cd "/Users/arindam.pal/Projects/CRC Website 2025/crc-website"
npm run dev
```

Visit `http://localhost:4321/members` to see your member area.

## Next Steps

Once you've completed the setup above, let me know and I can help you:

1. Add sign-in/sign-up buttons to the member page
2. Create a protected member dashboard
3. Add user profile functionality
4. Set up member-only content areas

## Troubleshooting

**Error: "Clerk publishable key not found"**
- Make sure your `.env` file is in the project root
- Restart your dev server after adding environment variables

**Error: "Invalid publishable key"**
- Double-check you copied the entire key from Clerk dashboard
- Make sure there are no extra spaces or quotes

**Can't see login page**
- Make sure you restarted your dev server after adding Clerk integration

## Resources

- [Clerk Astro Documentation](https://clerk.com/docs/quickstarts/astro)
- [Clerk Dashboard](https://dashboard.clerk.com)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)

---

**Ready to continue?** Complete steps 1-4, then let me know and I'll help you add the authentication UI to your member area!
