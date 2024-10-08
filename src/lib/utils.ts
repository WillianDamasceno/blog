export function getBase(url = "") {
  const base = import.meta.env.BASE_URL;
  return `${base}${url}`;
}
