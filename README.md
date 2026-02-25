

🚀 Host a Website with Google Analytics for $0 Using Figma + Cloudflare

This guide shows how to host a website for free using:
	•	🎨 Figma Sites
	•	☁️ Cloudflare Workers
	•	📊 Google Analytics
	•	🌍 Your own custom domain

No server. No VPS. No hosting bill.

⸻

🧩 Architecture

User → Cloudflare → Worker → Figma Site
                          ↳ Inject Google Analytics

Cloudflare Workers proxy your Figma site and inject tracking dynamically at the edge.

⸻

1️⃣ Create Your Website in Figma
	1.	Create your design in Figma
	2.	Publish it using Figma Sites
	3.	You will get a URL like:

https://yourproject.figweb.site

That is your origin.

⸻

2️⃣ Add Your Domain to Cloudflare
	1.	Create a Cloudflare account
	2.	Add your domain
	3.	Set nameservers to Cloudflare
	4.	Create an A record:

Type: A
Name: @
IPv4: 192.0.2.1   (any dummy IP works)
Proxy: 🟠 Proxied (IMPORTANT)

The IP will not be used — all traffic will go through the Worker.

⸻

3️⃣ Create a Cloudflare Worker

Go to:

Cloudflare Dashboard → Workers & Pages → Create Worker

Replace the default script with the content of exemplecloudflareworker.js

Replace:

yourproject.figweb.site
G-XXXXXXXXXX

With your real values.

⸻

4️⃣ Attach Worker to Your Domain

Go to:

Workers → Triggers → Routes

Add route:

example.com/*

Select your Worker.

Now all traffic goes:

User → Cloudflare Worker → Figma → Inject Analytics → User


⸻

5️⃣ Test It

Open:

https://yourdomain.com

Open DevTools → Network → Confirm:
	•	Page loads correctly
	•	Google tag is present
	•	No console errors

Check Google Analytics real-time dashboard to confirm tracking works.

⸻

💰 Cost Breakdown

Service	Cost
Figma	Free
Cloudflare Workers (free tier)	Free
Google Analytics	Free
Hosting	$0


⸻

⚡ Why This Is Powerful
	•	Fully serverless
	•	Edge performance (Cloudflare CDN)
	•	HTTPS automatic
	•	Custom domain support
	•	No infrastructure management
	•	Easy SEO modifications
	•	Can inject any script dynamically

⸻

🔥 Optional Enhancements

You can also:
	•	Inject Facebook Pixel
	•	Modify canonical tags
	•	Run A/B tests
	•	Geo-block traffic
	•	Add security headers
	•	Implement caching rules

All at the edge.

⸻

🛠 Troubleshooting

Site not loading?
	•	Make sure DNS is proxied (orange cloud enabled)

Analytics not firing?
	•	Verify correct GA ID
	•	Check page source

Worker not triggering?
	•	Verify route is correct
	•	Ensure route matches domain exactly

⸻

🎯 When to Use This
	•	Landing pages
	•	MVP validation
	•	Personal sites
	•	Marketing campaigns
	•	Portfolio sites

Not recommended for:
	•	Complex backend apps
	•	Heavy dynamic server logic

⸻

If you want, I can also provide:
	•	Production-hardened version (cache + security headers)
	•	Version with A/B testing
	•	Version optimized for SEO
	•	Version using Cloudflare Pages instead of Workers
