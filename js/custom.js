VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x389aff,
  backgroundColor: 0x70607
})

function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Resume.pdf";
   link.click();
}


    function toggleLike(button) {
      const icon = button.querySelector('i');
      button.classList.toggle('active');

      if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
    }



