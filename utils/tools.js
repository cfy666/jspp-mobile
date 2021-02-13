function scrollToPosition (target) {
  const offsetLeft = target.offsetLeft,
        scrollEl = target.parentNode.parentNode;
      
  scrollEl.scrollTo(offsetLeft, 0);
}

export {
  scrollToPosition
}