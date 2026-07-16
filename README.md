# Plisio Proxy

Minimal proxy server for Vortex Equality to forward withdrawal requests to Plisio API.
Provides a stable hostname for Plisio IP whitelist.

## Deploy to Render (Free Tier - 2 minutes)

1. Go to https://render.com - Sign up / Log in
2. Click "New" - "Web Service"
3. Connect this GitHub repo
4. Settings:
   - Name: plisio-proxy
   - Runtime: Node
   - Build Command: npm install
   - Start Command: node server.js
   - Plan: Free
5. Add Environment Variable:
   - PLISIO_PROXY_SECRET = (same value as in Vercel)
6. Click "Create Web Service"
7. Copy the URL (e.g. https://plisio-proxy-xxxx.onrender.com)

## After Deploy

Update in Vercel Environment Variables:
- PLISIO_PAYOUT_API_URL = https://plisio-proxy-xxxx.onrender.com

## Test

curl "https://your-proxy-url.onrender.com/health"
