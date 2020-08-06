const squadTemplate = (player, position) => {
  return `
  <li class="collection-item">
  <div class="row">
    <span class="title-detail col s3">${position}</span>
    <span class="col s8 offset-s1">${player.name}</span>
  </div>
</li>
  `;
};

export { squadTemplate };
