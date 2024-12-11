// Seleciona o elemento canvas
    var canvas = document.getElementById("renderCanvas");

    // Inicializa o motor Babylon.js
    var engine = new BABYLON.Engine(canvas, true);

    // Cria a cena
    var scene = new BABYLON.Scene(engine);

    // Adiciona uma câmera ArcRotate para girar o cubo com o mouse
    var camera = new BABYLON.ArcRotateCamera(
      "Camera", 
      Math.PI / 2, 
      Math.PI / 2, 
      5, // Distância inicial da câmera
      BABYLON.Vector3.Zero(), // Foco no centro da cena
      scene
    );
    camera.attachControl(canvas, true); // Permite interação com o mouse

    // Adiciona uma luz à cena
    var light = new BABYLON.HemisphericLight(
      "Light", 
      new BABYLON.Vector3(0, 1, 0), // Direção da luz
      scene
    );

    BABYLON.SceneLoader.ImportMesh("", "./", "scene.gltf", scene, function (meshes) {
    // Seu código para configurar a cena depois que o modelo for carregado
});

    // Adiciona um material para colorir o cubo
    var material = new BABYLON.StandardMaterial("Material", scene);
    material.diffuseColor = new BABYLON.Color3(0.2, 0.5, 0.8); // Cor azul
    cube.material = material;

    // Renderiza a cena em um loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Redimensiona a tela ao alterar o tamanho da janela
    window.addEventListener("resize", () => {
      engine.resize();
    });