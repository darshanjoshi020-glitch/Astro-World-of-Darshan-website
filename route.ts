import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const b = await req.json();
  if (!b.person1?.name || !b.person2?.name) return NextResponse.json({error:'Enter both names and birth details.'},{status:400});
  return NextResponse.json({title:'Compatibility overview', status:'preview', message:'For a genuine Vedic kundli matching report, calculate both charts with the configured astrology provider and compare guna milan, nakshatra, mangal dosha and other requested factors. This starter does not invent a score.', pair:[b.person1.name,b.person2.name]});
}
