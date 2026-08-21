const typedName = document.getElementById('typed-name');

if (typedName) {
  const fullName = 'Miguel Marques Borges.';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    typedName.textContent = fullName;
  } else {
    let index = 0;
    let deleting = false;

    const typeCycle = () => {
      typedName.textContent = fullName.slice(0, index);

      if (!deleting && index < fullName.length) {
        index += 1;
        window.setTimeout(typeCycle, 82);
        return;
      }

      if (!deleting) {
        deleting = true;
        window.setTimeout(typeCycle, 1500);
        return;
      }

      if (index > 0) {
        index -= 1;
        window.setTimeout(typeCycle, 46);
        return;
      }

      deleting = false;
      window.setTimeout(typeCycle, 500);
    };

    window.setTimeout(typeCycle, 500);
  }
}
