/**
 * set allert functuon
 */

 function setAllert(msg, bg = "warning") {
    return `
    <div class="alert alert-${bg} alert-dismissible fade show" role="alert">
    ${msg}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" style="outline: none;">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
    `;
  }