'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'inherit'
    }}>
      <div style={{
        maxWidth: '440px',
        width: '100%',
        backgroundColor: 'var(--bg-card, #111827)',
        border: '1px solid var(--border-color, #1f2937)',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: '#ef4444',
          fontWeight: 700,
          fontFamily: 'monospace'
        }}>
          !
        </div>

        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: 'var(--text-primary, #ffffff)',
          marginBottom: '0.75rem',
          letterSpacing: '-0.02em'
        }}>
          Unexpected Client Error
        </h2>

        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary, #9ca3af)',
          lineHeight: 1.5,
          marginBottom: '2rem'
        }}>
          The page encountered an unexpected client runtime error. You can retry rendering or return to the foundry overview.
        </p>

        <div style={{
          display: 'flex',
          gap: '0.75rem'
        }}>
          <button
            onClick={() => reset()}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--text-primary, #ffffff)',
              color: 'var(--bg-main, #000000)',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'opacity 0.15s ease'
            }}
          >
            Try Again
          </button>
          <Link
            href="/"
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-primary, #ffffff)',
              border: '1px solid var(--border-color, #374151)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Foundry Home
          </Link>
        </div>
      </div>
    </div>
  );
}
