import React from 'react';
import MedicalTerm from '@/components/MedicalTerm';
import { medicalGlossary } from '@/lib/constants';

export function formatTextWithGlossary(text?: string) {
  if (!text) return null;

  const keys = Object.keys(medicalGlossary).sort((a, b) => b.length - a.length);
  let parts: (string | React.ReactNode)[] = [text];

  for (const key of keys) {
    const newParts: (string | React.ReactNode)[] = [];
    for (const part of parts) {
      if (typeof part !== 'string') {
        newParts.push(part);
        continue;
      }

      const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`(${escapedKey}(?:s|es)?)`, 'gi');
      const splitPart = part.split(regex);

      for (let i = 0; i < splitPart.length; i++) {
        if (i % 2 === 1) {
          newParts.push(
            <MedicalTerm key={`${key}-${i}`} termKey={key}>
              {splitPart[i]}
            </MedicalTerm>
          );
        } else {
          newParts.push(splitPart[i]);
        }
      }
    }
    parts = newParts;
  }

  return <>{parts}</>;
}
