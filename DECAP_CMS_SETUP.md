# Decap CMS Setup Guide

Decap CMS is now installed! This will allow non-technical users to easily manage content for announcements, events, sheet music, resources, and the member directory.

## What's Been Set Up

✅ Decap CMS installed and configured
✅ Admin interface at `/admin`
✅ Content collections created for:
  - **Announcements** - News and updates for members
  - **Events & Calendar** - Rehearsals, performances, meetings
  - **Sheet Music** - Upload PDFs and practice tracks
  - **Resources** - Handbooks, guidelines, forms
  - **Member Directory** - Contact information for members

## Setup Steps on Netlify

### 1. Enable Netlify Identity (Required)

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Identity**
4. Click **Enable Identity**

### 2. Configure Identity Settings

1. In **Identity** settings, scroll to **Registration preferences**
2. Select **Invite only** (recommended for member-only access)
3. Scroll to **External providers** (optional)
   - You can enable Google, GitHub, etc. for easier login

### 3. Enable Git Gateway

1. Still in **Identity** settings
2. Scroll to **Services** → **Git Gateway**
3. Click **Enable Git Gateway**
4. This allows the CMS to commit changes to your GitHub repo

### 4. Invite Users

1. Go to **Identity** tab in Netlify dashboard
2. Click **Invite users**
3. Enter email addresses of board members/admins
4. They'll receive an invitation email to set up their account

## How to Access the CMS

### For Administrators:

1. Visit: `https://your-site.netlify.app/admin`
2. Log in with Netlify Identity credentials
3. Start creating content!

### For Local Development:

To test the CMS locally:

1. Uncomment this line in `public/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

2. Run the Netlify CMS proxy server:
   ```bash
   npx netlify-cms-proxy-server
   ```

3. In another terminal, run your dev server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:4321/admin`

## Content Types

### 1. Announcements
- **Title**: Short announcement title
- **Date**: When to publish
- **Body**: Full announcement text (supports markdown)
- **Priority**: Low, Normal, or High
- **Published**: Toggle to show/hide

### 2. Events & Calendar
- **Event Title**: Name of the event
- **Event Date**: When it happens
- **Event Time**: Start time (optional)
- **Location**: Where it's happening
- **Description**: Full event details
- **Event Type**: Rehearsal, Performance, Meeting, Other
- **Published**: Toggle to show/hide

### 3. Sheet Music
- **Title**: Song name
- **Composer**: Who wrote it
- **Arranger**: Who arranged it (optional)
- **Concert/Season**: Which concert it's for
- **Voice Part**: Soprano, Alto, Tenor, Bass, or All Parts
- **PDF File**: Upload the sheet music PDF
- **Practice Track**: Upload audio file (optional)
- **Notes**: Any additional information
- **Published**: Toggle to show/hide

### 4. Resources
- **Title**: Resource name
- **Category**: Handbook, Guidelines, Forms, or Other
- **Description**: What this resource is
- **File**: Upload a file (PDF, DOC, etc.)
- **Link**: Or provide a URL instead
- **Published**: Toggle to show/hide

### 5. Member Directory
- **Name**: Member's full name
- **Email**: Contact email
- **Phone**: Contact phone
- **Voice Part**: Soprano, Alto, Tenor, Bass
- **Join Date**: When they joined
- **Role**: Any special role (optional)
- **Published**: Toggle to show/hide

## Using the Content in Your Site

The content is stored in `src/content/` folders as markdown files. You'll need to:

1. Create Astro pages to display this content
2. Use Astro's Content Collections API to query the content
3. Display it on your member pages

Would you like me to create example pages that display this content?

## Media Uploads

All uploaded files (PDFs, images, audio) are stored in:
- `public/images/uploads/`

They're accessible at:
- `/images/uploads/filename.pdf`

## Troubleshooting

**Can't log in to /admin**
- Make sure Netlify Identity is enabled
- Check that you've been invited as a user
- Clear browser cache and try again

**Changes not showing on site**
- Git Gateway commits changes to your repo
- Netlify will auto-deploy
- Wait 1-2 minutes for build to complete

**Local CMS not working**
- Make sure `local_backend: true` is uncommented
- Run the proxy server: `npx netlify-cms-proxy-server`
- Check both servers are running

## Next Steps

Once deployed to Netlify:

1. Enable Netlify Identity
2. Enable Git Gateway
3. Invite your first admin user
4. Visit `/admin` and start adding content!

---

**Ready to display the content?** Let me know and I can create the pages to show announcements, events, sheet music, etc. on your member area!
