import React from 'react';
import { ArchetypeId, SliderParam } from '../types';

export interface BrandModel {
  id: string;
  name: string;
  archetypeId: ArchetypeId;
  prompt: string;
  insight: string;
  parameters: SliderParam[];
  render: (values: Record<string, number>, showOfficial: boolean) => React.ReactNode;
}
