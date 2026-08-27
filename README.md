# LocalTender

Bradford council jobs for local firms.

## Clerk auth

1. Create an app at https://dashboard.clerk.com
2. Copy the publishable key and secret key
3. In Vercel → localtender → Settings → Environment Variables add:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/app
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

4. In Clerk → Paths set sign-in `/login` and sign-up `/signup`
5. In Clerk → Domains allow your Vercel URL
6. Redeploy

Until keys are set, demo sign-up still works in the browser.
