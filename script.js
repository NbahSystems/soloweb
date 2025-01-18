let isLoading = false;

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (!isLoading && scrollTop + clientHeight >= scrollHeight) {
    isLoading = true;
    fetchNews().then(() => {
      isLoading = false;
    });
  }
});
