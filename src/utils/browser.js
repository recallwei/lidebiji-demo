export const openWindow=(url)=> {
  const w = window.open("about:blank");
  if (w) {
    w.opener = null;
    w.location.href = url;
  }
  return;
}
