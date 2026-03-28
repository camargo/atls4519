// Refresh Button

const refreshBtn = document.getElementById('refresh-btn');
if (refreshBtn) {
  refreshBtn.addEventListener('click', () => {
    const timeEl = document.getElementById('refresh-time');
    const now = new Date();
    const utc = now.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
      hour12: false,
    });
    const date = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });
    timeEl.textContent = `${utc} UTC, ${date}`;
    refreshBtn.textContent = 'Data refreshed';
    setTimeout(() => {
      refreshBtn.innerHTML =
        '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M13.65 2.35A7.96 7.96 0 008 0a8 8 0 108 8h-2a6 6 0 11-1.76-4.24L10 6h6V0l-2.35 2.35z" fill="currentColor"/></svg> Refresh Data';
    }, 2000);
  });
}
