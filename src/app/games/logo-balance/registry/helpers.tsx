import React from 'react';

export function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

export function pt(deg: number, r: number): [number, number] {
  const rad = degToRad(deg);
  return [
    Math.round(r * Math.cos(rad) * 10) / 10,
    Math.round(-r * Math.sin(rad) * 10) / 10,
  ];
}

export function arcPath(a1: number, a2: number, rIn: number, rOut: number): string {
  let delta = (a2 - a1) % 360;
  if (delta < 0) delta += 360;
  const large = delta > 180 ? 1 : 0;
  const [x1, y1] = pt(a1, rOut);
  const [x2, y2] = pt(a2, rOut);
  const [x3, y3] = pt(a2, rIn);
  const [x4, y4] = pt(a1, rIn);
  return `M ${x1} ${y1} A ${rOut} ${rOut} 0 ${large} 0 ${x2} ${y2} L ${x3} ${y3} A ${rIn} ${rIn} 0 ${large} 1 ${x4} ${y4} Z`;
}

export function getParamVal(
  values: Record<string, number>,
  showOfficial: boolean,
  paramId: string,
  targetValue: number
): number {
  return showOfficial ? targetValue : (values[paramId] ?? targetValue);
}

export function SpecGuideLine({
  x1,
  y1,
  x2,
  y2,
  transform,
}: {
  x1: number | string;
  y1: number | string;
  x2: number | string;
  y2: number | string;
  transform?: string;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#10B981"
      strokeWidth="2"
      strokeDasharray="4 4"
      transform={transform}
    />
  );
}

export function SpecGuideCircle({
  cx,
  cy,
  r,
}: {
  cx: number | string;
  cy: number | string;
  r: number | string;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke="#10B981"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
  );
}
