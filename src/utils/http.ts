export async function http<R>(url: string, options: RequestInit): Promise<R> {
  const call = await fetch(url, options);
  return call.json() as R;
}
