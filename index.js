function newImage(path, leftPos, bottomPos) {
  let object = document.createElement("img");
  object.src = path;
  object.style.position = "fixed";
  object.style.left = leftPos;
  object.style.bottom = bottomPos;
  document.body.append(object);
  return object;
}

function newItem(path, leftPos, bottomPos) {
  let object = document.createElement("img");
  object.src = path;
  object.style.position = "fixed";
  object.style.left = leftPos;
  object.style.bottom = bottomPos;
  object.addEventListener("click", function () {
    object.remove();
  });
  document.body.append(object);
  return object;
}

//adding green monster image
pathGreenCharacter = "assets/green-character.gif";
newImage(pathGreenCharacter, "100px", "100px");

// adding pine tree image
pathPineTree = "assets/pine-tree.png";
newImage(pathPineTree, "450px", "200px");

// adding tree image
pathTree = "assets/tree.png";
newImage(pathTree, "200px", "300px");

// adding pillar image
pathPillar = "assets/pillar.png";
newImage(pathPillar, "350px", "100px");

// adding crate image
pathCrate = "assets/crate.png";
newImage(pathCrate, "150px", "200px");

// adding well image
pathWell = "assets/well.png";
newImage(pathWell, "500px", "425px");

// adding sword
pathSword = "assets/sword.png";
newItem(pathSword, "500px", "405px");
sword.addEventListener("click", function () {
  sword.remove();
});
