# Deployment Checklist - Charles River Chorale Website

Your site is live at: **https://jolly-lollipop-2c5fea.netlify.app**

## ✅ Steps to Complete Setup

### 1. Enable Netlify Identity (REQUIRED for /admin to work)

1. Go to: https://app.netlify.com/sites/jolly-lollipop-2c5fea/settings/identity
2. Click **"Enable Identity"**
3. This is required for the admin CMS to work

### 2. Configure Identity Settings

After enabling Identity:

**Registration Settings:**
1. Scroll to **Registration preferences**
2. Select **"Invite only"** (recommended - only invited users can access admin)

**External Providers (Optional):**
1. Under **External providers**, you can enable:
   - Google OAuth
   - GitHub OAuth
   - This makes login easier for users

### 3. Enable Git Gateway (REQUIRED)

1. Still in Identity settings
2. Scroll down to **Services** → **Git Gateway**
3. Click **"Enable Git Gateway"**
4. This allows the CMS to save content to your GitHub repo

### 4. Add Environment Variables for Clerk

1. Go to: https://app.netlify.com/sites/jolly-lollipop-2c5fea/settings/env
2. Click **"Add a variable"**
3. Add these two variables:

   **Variable 1:**
   - Key: `PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Value: `pk_test_YWxsb3dpbmctc3BpZGVyLTQ5LmNsZXJrLmFjY291bnRzLmRldiQ`

   **Variable 2:**
   - Key: `CLERK_SECRET_KEY`
   - Value: `sk_test_FDXdZ5Qy2lOl5qv6WLrhsJAgmk7lQEYaCOPu6Uy9Ro`

4. Click **"Save"**
5. Trigger a new deploy (Settings → Build & deploy → Trigger deploy → Deploy site)

### 5. Configure Clerk for Your Netlify Domain

1. Go to: https://dashboard.clerk.com
2. Select your "Charles River Chorale" application
3. Go to **Configure** → **Domains**
4. Add your Netlify domain: `jolly-lollipop-2c5fea.netlify.app`
5. Click **Add domain**

### 6. Invite Your First Admin User

After completing steps 1-3 above:

1. Go to: https://app.netlify.com/sites/jolly-lollipop-2c5fea/identity
2. Click **"Invite users"**
3. Enter your email address
4. Click **"Send"**
5. Check your email for the invitation
6. Click the link to set your password

### 7. Test the Admin Interface

1. Visit: https://jolly-lollipop-2c5fea.netlify.app/admin
2. Click **"Login with Netlify Identity"**
3. Enter your credentials
4. You should see the Decap CMS dashboard!

---

## After Setup is Complete

### Access the CMS:
- **URL:** https://jolly-lollipop-2c5fea.netlify.app/admin
- **Login:** Use Netlify Identity credentials

### Content You Can Manage:
1. **Announcements** - Post updates for members
2. **Events & Calendar** - Add rehearsals, concerts, meetings
3. **Sheet Music** - Upload PDFs and practice tracks
4. **Resources** - Upload handbooks, guidelines, forms
5. **Member Directory** - Manage member contact info

### Member Login:
- **URL:** https://jolly-lollipop-2c5fea.netlify.app/members
- **Sign In:** https://jolly-lollipop-2c5fea.netlify.app/sign-in
- Members can create accounts via Clerk

---

## Current Status

- ✅ Site deployed to Netlify
- ✅ Clerk authentication configured
- ✅ Decap CMS files in place
- ⏳ Waiting for Netlify Identity to be enabled
- ⏳ Waiting for Git Gateway to be enabled
- ⏳ Waiting for environment variables to be added

**Complete steps 1-6 above to fully activate the site!**

---

## Troubleshooting

**Admin page is blank:**
- Enable Netlify Identity (Step 1)
- Enable Git Gateway (Step 3)
- Wait 1-2 minutes for settings to propagate
- Hard refresh the page (Cmd+Shift+R on Mac)

**Can't log in to /admin:**
- Make sure you've been invited via Netlify Identity
- Check your email for the invitation
- Try resetting your password

**Member sign-in not working:**
- Make sure environment variables are added (Step 4)
- Trigger a new deploy after adding variables
- Add Netlify domain to Clerk (Step 5)

**Need help?**
- Netlify Identity docs: https://docs.netlify.com/visitor-access/identity/
- Clerk docs: https://clerk.com/docs
- Decap CMS docs: https://decapcms.org/docs/

---

## Next Steps (Optional)

1. **Custom Domain:** Add your own domain in Netlify settings
2. **Update Clerk for Production:** When ready, switch from test keys to production keys
3. **Create Content Display Pages:** Build pages to show announcements, events, etc.
4. **Invite Board Members:** Add more admin users via Netlify Identity

**Your website is ready to go live once you complete the setup steps above!**
