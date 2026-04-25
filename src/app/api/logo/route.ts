import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get('domain');
  if (!domain) return new NextResponse('Missing domain', { status: 400 });

  const sources = [
    `https://logo.clearbit.com/${domain}`,
    `https://logo.clearbit.com/${domain}?size=128`,
  ];

  for (const url of sources) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CofrethBot/1.0)', Accept: 'image/*' },
        next: { revalidate: 86400 },
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        return new NextResponse(buffer, {
          headers: {
            'Content-Type': res.headers.get('Content-Type') ?? 'image/png',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        });
      }
    } catch { /* try next source */ }
  }

  return new NextResponse(null, { status: 404 });
}
