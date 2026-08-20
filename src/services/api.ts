// API Client Service connecting React Frontend to MySQL Express REST API Server

const API_BASE_URL = 'http://localhost:5000/api';

export async function checkServerHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/health`, { method: 'GET' });
    if (!res.ok) return false;
    const data = await res.json();
    return data.status === 'ok';
  } catch {
    return false;
  }
}

// ------------------------------------------------------------
// NEWS API
// ------------------------------------------------------------
export async function fetchNewsFromApi() {
  const res = await fetch(`${API_BASE_URL}/news`);
  if (!res.ok) throw new Error('Failed to fetch news from MySQL API');
  return res.json();
}

export async function createNewsInApi(newsItem: any) {
  const res = await fetch(`${API_BASE_URL}/news`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newsItem)
  });
  if (!res.ok) throw new Error('Failed to create news in MySQL');
  return res.json();
}

export async function updateNewsInApi(id: string, newsItem: any) {
  const res = await fetch(`${API_BASE_URL}/news/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newsItem)
  });
  if (!res.ok) throw new Error('Failed to update news in MySQL');
  return res.json();
}

export async function deleteNewsInApi(id: string) {
  const res = await fetch(`${API_BASE_URL}/news/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete news in MySQL');
  return res.json();
}

// ------------------------------------------------------------
// STAFF API
// ------------------------------------------------------------
export async function fetchStaffFromApi() {
  const res = await fetch(`${API_BASE_URL}/staff`);
  if (!res.ok) throw new Error('Failed to fetch staff from MySQL API');
  return res.json();
}

export async function createStaffInApi(staffItem: any) {
  const res = await fetch(`${API_BASE_URL}/staff`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(staffItem)
  });
  if (!res.ok) throw new Error('Failed to create staff in MySQL');
  return res.json();
}

export async function updateStaffInApi(id: string, staffItem: any) {
  const res = await fetch(`${API_BASE_URL}/staff/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(staffItem)
  });
  if (!res.ok) throw new Error('Failed to update staff in MySQL');
  return res.json();
}

export async function deleteStaffInApi(id: string) {
  const res = await fetch(`${API_BASE_URL}/staff/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete staff in MySQL');
  return res.json();
}

// ------------------------------------------------------------
// DESA API
// ------------------------------------------------------------
export async function fetchDesaFromApi() {
  const res = await fetch(`${API_BASE_URL}/desa`);
  if (!res.ok) throw new Error('Failed to fetch desa from MySQL API');
  return res.json();
}

export async function updateDesaInApi(id: string, desaItem: any) {
  const res = await fetch(`${API_BASE_URL}/desa/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(desaItem)
  });
  if (!res.ok) throw new Error('Failed to update desa in MySQL');
  return res.json();
}

// ------------------------------------------------------------
// HISTORICAL HEADS API
// ------------------------------------------------------------
export async function fetchHistoricalHeadsFromApi() {
  const res = await fetch(`${API_BASE_URL}/historical-heads`);
  if (!res.ok) throw new Error('Failed to fetch historical heads from MySQL API');
  return res.json();
}

export async function createHistoricalHeadInApi(headItem: any) {
  const res = await fetch(`${API_BASE_URL}/historical-heads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(headItem)
  });
  if (!res.ok) throw new Error('Failed to create historical head in MySQL');
  return res.json();
}

export async function updateHistoricalHeadInApi(id: string, headItem: any) {
  const res = await fetch(`${API_BASE_URL}/historical-heads/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(headItem)
  });
  if (!res.ok) throw new Error('Failed to update historical head in MySQL');
  return res.json();
}

export async function deleteHistoricalHeadInApi(id: string) {
  const res = await fetch(`${API_BASE_URL}/historical-heads/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete historical head in MySQL');
  return res.json();
}

// ------------------------------------------------------------
// STATS API
// ------------------------------------------------------------
export async function fetchStatsFromApi() {
  const res = await fetch(`${API_BASE_URL}/stats`);
  if (!res.ok) throw new Error('Failed to fetch stats from MySQL API');
  return res.json();
}

export async function updateStatsInApi(statsItem: any) {
  const res = await fetch(`${API_BASE_URL}/stats`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(statsItem)
  });
  if (!res.ok) throw new Error('Failed to update stats in MySQL');
  return res.json();
}

// ------------------------------------------------------------
// TICKETS API
// ------------------------------------------------------------
export async function fetchTicketsFromApi() {
  const res = await fetch(`${API_BASE_URL}/tickets`);
  if (!res.ok) throw new Error('Failed to fetch tickets from MySQL API');
  return res.json();
}

export async function createTicketInApi(ticketItem: any) {
  const res = await fetch(`${API_BASE_URL}/tickets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticketItem)
  });
  if (!res.ok) throw new Error('Failed to create ticket in MySQL');
  return res.json();
}

export async function updateTicketInApi(id: string, ticketItem: any) {
  const res = await fetch(`${API_BASE_URL}/tickets/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticketItem)
  });
  if (!res.ok) throw new Error('Failed to update ticket in MySQL');
  return res.json();
}

export async function deleteTicketInApi(id: string) {
  const res = await fetch(`${API_BASE_URL}/tickets/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete ticket in MySQL');
  return res.json();
}

// ------------------------------------------------------------
// BANNERS API
// ------------------------------------------------------------
export async function fetchBannersFromApi() {
  const res = await fetch(`${API_BASE_URL}/banners`);
  if (!res.ok) throw new Error('Failed to fetch banners from MySQL API');
  return res.json();
}

export async function createBannerInApi(bannerItem: any) {
  const res = await fetch(`${API_BASE_URL}/banners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bannerItem)
  });
  if (!res.ok) throw new Error('Failed to create banner in MySQL');
  return res.json();
}

export async function updateBannerInApi(id: string, bannerItem: any) {
  const res = await fetch(`${API_BASE_URL}/banners/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bannerItem)
  });
  if (!res.ok) throw new Error('Failed to update banner in MySQL');
  return res.json();
}

export async function deleteBannerInApi(id: string) {
  const res = await fetch(`${API_BASE_URL}/banners/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete banner in MySQL');
  return res.json();
}
