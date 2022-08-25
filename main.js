function classify ()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);}

  function gotresult(error,results){
document.getElementsById('labelresult').innerHTML='voice of'+results[0].label
document.getElementsById('no.of_aad').innerHTML='dog'+dog+'cat'+cat;
document.getElementById("labelresult").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("no.of_aad").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img = document.getElementById('animal_image');

if (results[0].label == "Barking") {
  img.src = 'dog.jpg';
  dog = dog+1;
} else if (results[0].label == "Meowing") {
  img.src = 'th(23).jpg';
  cat = cat + 1;
} else{
  img.src = 'ear.jpg';
}

}

  