function showFiles() {
    // An empty img element
    let demoImage = document.getElementById('idImage');
    // read the file from the user
    let file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        demoImage.src = reader.result;
    }
    reader.readAsDataURL(file);
    app();
}  

async function load() {
    const model = await tf.loadLayersModel('tfjs_model/model.json');
    return model;
  };

const model = load();  // load the model now to prevent any delay when user clicks 'Predict'

async function predict(){
    img_ = document.getElementById('idImage');
    if (img_.src != ""){
        const result = await net.classify(img_);
        console.log(result);
    }
}
