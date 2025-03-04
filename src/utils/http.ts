export async function http<R>(url: string, options: RequestInit): Promise<R> {
  console.log('Data request', url, options);
  const call = await fetch(url, options);
  return call.json() as R;
}
