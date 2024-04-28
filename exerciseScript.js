function updateDate() {
    const now = new Date();
    const currentDate = now.toString();
    document.querySelector('#date').textContent = currentDate;
  }
  setInterval(updateDate, 1000);

  let originalImageSrcs = [];

  function swapImages() {
      const images = document.querySelectorAll('.gallery__item img');
      const imageSrcs = Array.from(images).map(img => img.src);

      for (let i = imageSrcs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [imageSrcs[i], imageSrcs[j]] = [imageSrcs[j], imageSrcs[i]];
      }

      images.forEach((img, index) => {
          img.src = imageSrcs[index];
      });
  }

  function resetImages() {
      const images = document.querySelectorAll('.gallery__item img');

      if (originalImageSrcs.length === 0) {
          originalImageSrcs = Array.from(images).map(img => img.src);
      }

      images.forEach((img, index) => {
          img.src = originalImageSrcs[index];
      });
  }