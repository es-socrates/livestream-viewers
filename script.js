async function fetchViewerCountAndDisplay(url) {
  try {
    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Network response was not ok: status ${response.status}, ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.data || typeof data.data.ViewerCount === 'undefined') {
      throw new Error('Data is missing the "ViewerCount" property');
    }
    const viewerCount = data.data.ViewerCount;
    document.getElementById('viewer-count').innerText = `${viewerCount} viewers`;
  } catch (error) {
    console.error('Error fetching viewer count:', error);
    document.getElementById('viewer-count').innerText = 'Error fetching viewer count';
  }
}

async function startViewerCountUpdates(url, interval = 10000) {
  await fetchViewerCountAndDisplay(url);
  requestAnimationFrame(() => startViewerCountUpdates(url, interval));
}

// You just have to put the ClaimID that is in the channel description.

startViewerCountUpdates('https://api.odysee.live/livestream/is_live?channel_claim_id=xxx');