function newImage(path, leftPos, bottomPos) {
  let object = document.createElement("img");
  object.src = path;
  object.style.position = "fixed";
  object.style.left = leftPos;
  object.style.bottom = bottomPos;
  document.body.append(object);
  return object;
}

//adding green monster
pathGreenCharacter = "assets/green-character.gif";
newImage(pathGreenCharacter, "100px", "100px");

// adding a pine tree
pathPineTree = "assets/pine-tree.png";
newImage(pathPineTree, "450px", "200px");
