    var canvas = document.getElementById("renderCanvas");

    var engine = new BABYLON.Engine(canvas, true);

    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera(
      "Camera", 
      Math.PI / 2, 
      Math.PI / 2, 
      5,
      BABYLON.Vector3.Zero(), scene
    );
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight(
      "Light", 
      new BABYLON.Vector3(0, 1, -0.5), scene
    );

    var cube = BABYLON.MeshBuilder.CreateBox("Cube", { size: 2 }, scene);

    var material = new BABYLON.StandardMaterial("Material", scene);
    material.diffuseColor = new BABYLON.Color3(0.8, 0.2, 0.2);
    cube.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });

    // Redimensiona a tela ao alterar o tamanho da janela
    window.addEventListener("resize", () => {
      engine.resize();
    });