    (function () {
      var lightbox = document.getElementById('lightbox');
      var lightboxImg = document.getElementById('lightbox-img');
 
      document.querySelectorAll('.image-trigger').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          lightboxImg.src = trigger.dataset.lightboxSrc;
          lightboxImg.alt = trigger.dataset.lightboxAlt;
          lightbox.showModal();
        });
      });
 
      document.querySelector('.lightbox-close').addEventListener('click', function () {
        lightbox.close();
      });
 
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
          lightbox.close();
        }
      });
 
      lightbox.addEventListener('close', function () {
        lightboxImg.src = '';
      });
    })();
