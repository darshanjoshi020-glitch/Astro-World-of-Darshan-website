export type BirthInput = { name: string; birth_date: string; birth_time: string; birth_place: string; timezone: string };
export function localReading(input: BirthInput) {
  const date = new Date(`${input.birth_date}T${input.birth_time}:00`);
  if (Number.isNaN(date.getTime())) throw new Error('Please enter a valid birth date and time.');
  const signs = ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius'];
  const m = date.getUTCMonth() + 1, d = date.getUTCDate();
  const ranges: [number,number,number,number,number][] = [[1,20,1,19,0],[2,19,2,29,1],[3,20,3,31,2],[4,20,4,30,3],[5,21,5,31,4],[6,21,6,30,5],[7,23,7,31,6],[8,23,8,31,7],[9,23,9,30,8],[10,23,10,31,9],[11,22,11,30,10],[12,22,12,31,11]];
  let sign = 'Capricorn';
  if (m === 1) sign = d < 20 ? 'Capricorn' : 'Aquarius';
  else if (m === 2) sign = d < 19 ? 'Aquarius' : 'Pisces';
  else if (m === 3) sign = d < 21 ? 'Pisces' : 'Aries';
  else if (m === 4) sign = d < 20 ? 'Aries' : 'Taurus';
  else if (m === 5) sign = d < 21 ? 'Taurus' : 'Gemini';
  else if (m === 6) sign = d < 21 ? 'Gemini' : 'Cancer';
  else if (m === 7) sign = d < 23 ? 'Cancer' : 'Leo';
  else if (m === 8) sign = d < 23 ? 'Leo' : 'Virgo';
  else if (m === 9) sign = d < 23 ? 'Virgo' : 'Libra';
  else if (m === 10) sign = d < 23 ? 'Libra' : 'Scorpio';
  else if (m === 11) sign = d < 22 ? 'Scorpio' : 'Sagittarius';
  else sign = d < 22 ? 'Sagittarius' : 'Capricorn';
  return { title: `${input.name || 'Birth Chart'} — Birth Profile`, summary: `Your Sun-sign profile is ${sign}. A full Vedic birth chart requires accurate birth time, birth place coordinates, timezone handling, and a verified ephemeris/API calculation.`, sun_sign: sign, details: input, placements: [], provider_status: 'preview' as const };
}
