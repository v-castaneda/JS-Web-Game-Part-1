function newImage(path, leftPos, bottomPos) {
  let object = document.createElement("img");
  object.src = path;
  object.style.position = "fixed";
  object.style.left = leftPos;
  object.style.bottom = bottomPos;
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
let sword = document.createElement("img");
sword.src = "assets/sword.png";
sword.position = "fixed";
sword.left = "500px";
sword.bottom = "405px";
document.body.append(sword);

sword.addEventListener("click", function () {
  sword.remove();
});
