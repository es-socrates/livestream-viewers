async function fetchViewerCountAndDisplay(url) {
  try {
    console.log(`Fetching viewer count from URL: ${url}`);
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
    console.error('Error details:', error);
    if (error.message.includes('network')) {
      document.getElementById('viewer-count').innerText = 'Failed to connect to server';
    } else {
      console.error('Error fetching viewer count:', error);
      document.getElementById('viewer-count').innerText = 'Error fetching viewer count';
    }
  }
}

async function startViewerCountUpdates(url, interval = 10000) {
  // Validate URL format before using fetch
  if (!isValidUrl(url)) {
    console.error('Invalid URL provided');
    return;
  }
  await fetchViewerCountAndDisplay(url);
  setTimeout(() => startViewerCountUpdates(url, interval), interval);
}

function isValidUrl(url) {
  // Implement URL validation logic using regular expressions or libraries
  return true; // Replace with actual validation logic
}

// Use the CLAIM_ID from the .env file
const CLAIM_ID = process.env.VITE_CLAIM_ID;
const API_URL = process.env.VITE_API_URL.replace('$VITE_CLAIM_ID', CLAIM_ID);

startViewerCountUpdates(API_URL);