'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface GoogleAdUnitProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'vertical';
  responsive?: boolean;
}

export default function GoogleAdUnit({
  slot = '1234567890',
  format = 'auto',
  responsive = true
}: GoogleAdUnitProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-9905023034596970';

  useEffect(() => {
    if (client && typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // Silently catch duplicate push or ad-blocker suppression
      }
    }
  }, [client]);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--border-subtle, #e2e8f0)',
        borderRadius: '10px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.65rem'
        }}
      >
        <span
          className="mono-label"
          style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.65rem' }}
        >
          Advertisement
        </span>
        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted, #94a3b8)' }}>
          Google Ads
        </span>
      </div>

      {client ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '250px' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      ) : (
        /* Sleek placeholder when awaiting live publisher client ID */
        <div
          style={{
            minHeight: '200px',
            backgroundColor: '#f8fafc',
            border: '1px dashed #cbd5e1',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem 0.75rem',
            textAlign: 'center',
            gap: '0.4rem'
          }}
        >
          <span
            className="mono-label"
            style={{
              fontSize: '0.65rem',
              color: '#475569',
              backgroundColor: '#e2e8f0',
              padding: '0.15rem 0.4rem',
              borderRadius: '3px'
            }}
          >
            Google AdSense Slot
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1e293b' }}>
            Responsive Display Unit
          </span>
          <p
            style={{
              fontSize: '0.68rem',
              color: '#64748b',
              margin: 0,
              maxWidth: '220px',
              lineHeight: 1.4
            }}
          >
            Configured for sidebar monetization. Add NEXT_PUBLIC_ADSENSE_CLIENT_ID to serve live ad auctions.
          </p>
        </div>
      )}
    </div>
  );
}
