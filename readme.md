# Bareysh – Consulting & Product Strategy

A modern, principles-driven consulting website built with clean HTML, Tailwind CSS, and vanilla JavaScript.

## 🎯 Overview

Bareysh is a single-page website designed for a principles-driven consulting firm. It communicates clarity, trust, and long-term thinking through a minimal, premium design.

## ✨ Features

- **Modern Design**: Clean, minimal aesthetic with neutral color palette
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Accessible**: WCAG-compliant with proper semantic HTML and ARIA labels
- **Performance**: No heavy frameworks—pure HTML, CSS, and vanilla JS
- **Animations**: Subtle fade-in and scroll-reveal effects
- **Production-Ready**: Clean code, optimized for deployment

## 📋 Sections

1. **Hero** - Company positioning and primary CTA
2. **Principles** - 6 core principles with SVG icons
3. **What We Do** - Service offerings and outcomes
4. **Vision** - Forward-looking statement on values
5. **How We Work** - 4-step approach (Discover → Analyze → Design → Partner)
6. **Contact** - Contact form and email
7. **Footer** - Branding and links

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling (CDN)
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Inter typeface

## 🚀 Getting Started

### Local Development

1. Clone or download the repository
2. Open `index.html` in your browser
3. That's it—no build process needed

### File Structure

```
bareysh/
├── index.html      # Complete website (HTML + CSS + JS)
└── README.md       # This file
```

## 📦 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub repository named `<username>.github.io`
2. Push `index.html` to the repository
3. Create a `CNAME` file with your domain:
   ```
   bareysh.com
   ```
4. Update your domain's DNS settings:
   - Add A records pointing to GitHub's servers:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
5. Enable GitHub Pages in repository settings
6. DNS will propagate in 24-48 hours

### Option 2: Netlify

1. Push to GitHub repository
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command to: (leave blank—no build needed)
5. Set publish directory to: `/`
6. Deploy
7. Update DNS with Netlify's nameservers or use CNAME

### Option 3: Vercel

1. Push to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect and deploy
5. Connect your custom domain in project settings

### Option 4: Traditional Web Hosting

1. Upload `index.html` to your web host
2. Update DNS records to point to your hosting provider
3. Files will be served immediately

## 🎨 Customization

### Update Content

Edit text directly in `index.html`:
- Hero heading: Line ~195
- Service descriptions: Lines ~295-350
- Vision statement: Line ~380
- Contact email: Line ~450

### Update Branding

- **Primary color**: Change `#1f2937` (charcoal) to your preferred color throughout
- **Company name**: Replace "Bareysh" in hero and footer
- **Email**: Update `hello@bareysh.com` to your actual email

### Add/Modify Icons

Replace SVG icons in the principles section (lines ~230-280) with your own inline SVGs. All icons use `icon-svg` class for consistent sizing.

### Customize Colors

Primary palette (easily changeable):
- **Dark**: `#1f2937` (charcoal)
- **Light**: `#f9fafb` (off-white)
- **Accent**: `#d1d5db` (light gray)
- **Text**: `#6b7280` (gray-600)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on form inputs
- Proper color contrast ratios
- Keyboard navigation support
- Mobile-friendly touch targets

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## ⚡ Performance

- Single HTML file (no HTTP requests for HTML/CSS/JS)
- Tailwind CSS via CDN
- Fonts via Google Fonts CDN
- ~50KB total size (compressed)
- ~90+ Lighthouse score

## 🔗 Domain Setup Guide

### 1. Registrar Setup

At your domain registrar (GoDaddy, Namecheap, etc.):

**For GitHub Pages:**
- Create 4 A records:
  - `@` → `185.199.108.153`
  - `@` → `185.199.109.153`
  - `@` → `185.199.110.153`
  - `@` → `185.199.111.153`
- Or create a CNAME record:
  - `@` → `<username>.github.io`

**For Netlify/Vercel:** Follow their DNS documentation (usually CNAME records)

### 2. GitHub Pages Setup

In your repository settings:
- Go to Settings → Pages
- Select branch to deploy (main)
- Select folder (root /)
- Create CNAME file with your domain
- Save

### 3. Verify DNS

```bash
# Check DNS records
nslookup bareysh.com

# Or with dig
dig bareysh.com
```

DNS typically propagates within 24-48 hours.

## 📧 Form Setup

The contact form currently shows a confirmation message locally. For production, integrate with:

- **Formspree** - Free form backend (recommended)
- **EmailJS** - Client-side email sending
- **Netlify Forms** - Built-in if using Netlify
- **Custom backend** - Your own server

### Quick Setup with Formspree:

1. Go to [formspree.io](https://formspree.io)
2. Create new form for `hello@bareysh.com`
3. Update form in `index.html` to POST to Formspree endpoint

## 🎯 SEO

The site includes:
- Meta description
- Semantic HTML
- Fast load times
- Mobile-friendly design
- Structured content

To enhance further:
- Add Open Graph meta tags
- Add structured data (schema.org)
- Submit sitemap to search engines

## 📄 License

This website design is ready for use. Customize and deploy as needed.

## 💡 Tips

- Test on mobile devices before deploying
- Verify form submission works in production
- Update copyright year (auto-updated in footer)
- Monitor DNS propagation before going live
- Consider SSL certificate (usually free with hosting)

---

**Ready to deploy?** Follow the deployment guides above to get your Bareysh website live!
