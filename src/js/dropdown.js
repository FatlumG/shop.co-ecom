document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  
    // Toggle dropdown menu on button click
    dropdownToggle.addEventListener('click', () => {
      const isExpanded = dropdown.getAttribute('aria-expanded') === 'true';
  
      // Toggle dropdown menu visibility
      dropdown.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.style.display = isExpanded ? 'none' : 'block';
      
      // Smooth appearance
      dropdownMenu.style.opacity = isExpanded ? '0' : '1';
      dropdownMenu.style.transform = isExpanded ? 'translateY(-10px)' : 'translateY(0)';
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.display = 'none';
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.transform = 'translateY(-10px)';
        
        const icon = dropdownToggle.querySelector('i');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });
  