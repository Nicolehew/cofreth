import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

const ALLOWED = new Set([
  'ISO_9001-2015_QMS.pdf',
  'ISO_14001-2015_EMS.pdf',
  'ISO_45001-2018_OHS.pdf',
  'ISO_50001-2018_EnMS.pdf',
  'ISO_41001-2018_FMS.pdf',
  'IMS_Policy_Revision_4.pdf',
]);

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  if (!ALLOWED.has(filename)) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const filePath = join(process.cwd(), 'private-docs', filename);
    const buffer = readFileSync(filePath);

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'public, max-age=86400',
        'X-Robots-Tag': 'noindex',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
